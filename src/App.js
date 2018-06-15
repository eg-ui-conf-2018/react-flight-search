import React, { Component } from 'react';
import './App.css';
import FlightSearch from './components/FlightSearch';
import FlightOffers from './components/FlightOffers';
import {stringify} from 'query-string';

const SEARCH_URL = "https://apim.expedia.com/x/mflights/search";

/**
*
* TASKS:
*
* In FlightSearch.js:
*     1. Capture all of the user inputs
*     2. Invoke the search API when the submit button is clicked
*
*     Good to haves:
*     1. input validation (ensure that user supplied input is valid before invoking the API call)
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
*/
class App extends Component {

  constructor() {
      super();
      this.searchFlights = this.searchFlights.bind(this);

      this.state = {
          // Display a loading indicator while the fetch is happening
          isSearching: false,
          // Specific to the Expedia search API response
          legs: [],
          offers: []
      };
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

      this.setState({isSearching: true});
      const response = await fetch(`${SEARCH_URL}?${stringify(searchCriteria)}`);
      const results = await response.json();
      console.log(results);
      this.setState({
          legs: results.legs,
          offers: results.offers,
          isSearching: false
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Flight Search Workshop</h1>
        </header>
        <div className="App-content">
          <FlightSearch searchFlights={this.searchFlights}/>
          <FlightOffers
              legs={this.state.legs}
              offers={this.state.offers}
              isLoading={this.state.isSearching}
          />
        </div>
      </div>
    );
  }
}

export default App;
