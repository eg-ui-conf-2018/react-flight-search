import React, { Component } from 'react';
import './App.css';
import FlightSearch from './components/FlightSearch';
import FlightOffers from './components/FlightOffers';
import {stringify} from 'query-string';
import mockFetch from './mock-fetch';

const SEARCH_URL = "https://apim.expedia.com/x/mflights/search";

/**
*
* TASKS:
*
* Look for the TODO comments in each file and complete the code there.
*
* In FlightSearch.js:
*     1. Capture all of the user inputs
*     2. Invoke the search API when the submit button is clicked
*     3. Bonus (optional): input validation - ensure that user supplied input is valid before invoking the API call
*
* In App.js
*     1. Capture the API response, and set proper loading states
*
* In FlightOffers.js
*     1. Display the flight search results to the users
*
* In App.js
*     1. remove the mockFetch, and replace it with an actual fetch to the Expedia API
*
* Other optional bonus tasks:
*     1. Add propTypes to all React components
*     2. Use Redux to manage your state
*     3. Write tests
*/
class App extends Component {
  constructor(props) {
      super(props);

      this.searchFlights = this.searchFlights.bind(this);
  }

  async searchFlights(origin, destination, departureDate, returnDate) {
      const searchCriteria = {
          departureAirport: origin,
          arrivalAirport: destination,
          departureDate: departureDate,
          returnDate: returnDate,
          maxOfferCount: 10,
          key: '<api-key>'
      };

      /*
      TODO: remove the mockFetch, and replace it with an actual fetch to the Expedia API.

      The argument here in the mockFetch should already be a working URL,
      but the API docs can be found here:
      https://hackathon.expedia.com/docs/public/api/Flight%20Search/

      An example URL for a flight Search from SEA to LAS:
      https://apim.expedia.com/x/mflights/search?departureDate=2017-03-28&returnDate=2017-03-30&departureAirport=SEA&arrivalAirport=LAS
      */
      const results = await mockFetch(`${SEARCH_URL}?${stringify(searchCriteria)}`);

      // TODO: capture the search results
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Flight Search Workshop</h1>
        </header>
        <div className="App-content">
          <FlightSearch
              /* TODO: send this component a function to call to initiate the search (available here as `this.searchFlights`) */
          />
          <FlightOffers
              /* TODO: send this component the legs, offers, and whether or not the results are loading */
          />
        </div>
      </div>
    );
  }
}

export default App;
