import React from 'react';
import './FlightOffers.css';
import moment from 'moment';
import {ScaleLoader} from 'react-spinners';

/*
Takes in an array of offers sorted by price in ascending order and returns
a string describing their price range. e.g. "123.45 - 678.90 (12 offers)"
*/
const getOfferPrices = function(offers) {
    if (offers.length <= 0) {
        return 'No offers';
    }

    if (offers.length === 1) {
        return offers[0].totalFarePrice.formattedWholePrice;
    }

    const lowestOffer = offers[0];
    const highestOffer = offers[offers.length - 1];

    if (parseFloat(lowestOffer.totalFare) === parseFloat(highestOffer.totalFare)) {
        return `${lowestOffer.totalFarePrice.formattedWholePrice} (${offers.length} offers)`;
    }

    return `${lowestOffer.totalFarePrice.formattedWholePrice} - ${highestOffer.totalFarePrice.formattedWholePrice} (${offers.length} offers)`;
};

/*
A React component that outputs a display card for a flight leg.
Input props:
    leg: A flight leg
    offers: an array of offers sorted by price in ascending order
*/
const OfferCard = ({leg, offers}) => {
    const segments = leg.segments;
    const departureTime = moment(segments[0].departureTime);
    const arrivalTime = moment(segments[leg.segments.length - 1].arrivalTime);
    const durationAsMinutes = arrivalTime.diff(departureTime, 'minutes', true);
    const hourDuration = parseInt(durationAsMinutes / 60, 10);
    const minuteDuration = durationAsMinutes % 60;
    // console.log('offers for legId="%s"', leg.legId, offers);
    return (
        <div className="fs-offer">
            <div className="fs-offer-col">
                <div className="fs-offer__time">
                    {`${departureTime.format('LT')} - ${arrivalTime.format('LT')}`}
                </div>
                <div className="fs-offer__airline">
                    {segments[0].airlineName}
                </div>
            </div>
            <div className="fs-offer-col">
                <div className="fs-offer__duration">
                    {hourDuration ? `${hourDuration} hr ` : ''}
                    {minuteDuration ? `${minuteDuration} min` : ''}
                    {` (${segments.length === 1 ? 'nonstop' : `${segments.length - 1} stops`})`}
                </div>
                <div className="fs-offer__stops">{
                    [segments[0].departureAirportCode].concat(segments.map((segment) => segment.arrivalAirportCode)).join(' - ')
                }</div>
            </div>
            <div className="fs-offer-col">
                <div className="fs-offer__price">{getOfferPrices(offers)}</div>
            </div>
        </div>
    );
};

/*
A function to get the offers for a specific flight leg
sorted by price in ascending order.
Arguments:
    leg: A flight leg
    offers: Unsorted offers for all flight legs
*/
const getOffersForLeg = (leg, offers) =>
    offers.filter((offer) => {
        return offer.legIds.includes(leg.legId);
    }).sort((offerA, offerB) => { // sort in ascending fare order
        const fareA = parseFloat(offerA.totalFare);
        const fareB = parseFloat(offerB.totalFare);
        return fareA - fareB;
    });

/*
A React component that outputs all of the flight search results.
Input props:
    isLoading: a boolean that represents whether or not results are loading
    legs: an array of flight legs
    offers: an array of offers for all flight legs
*/
const FlightOffers = ({isLoading = false, legs = [], offers = []}) => {
    if (isLoading) {
        return (
            <div className="fs-offers">
                <div className="fs-offers-loading">
                    <ScaleLoader isLoading />
                </div>
            </div>
        );
    }

    return (
        <div className="fs-offers">
            {
                // TODO: for each leg
                // 1. Call getOffersForLeg function to find the corresponding offers
                // 2. Send the leg and those offers to the OfferCard component
            }
        </div>
    );
};

export default FlightOffers;
