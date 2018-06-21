import React, {PureComponent} from 'react';
import './FlightSearch.css';
import {FormGroup, FormControl, Button} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class extends PureComponent {
    constructor(props) {
        super(props);

        /*
        TODO: Initialize the state property here; initialize the string values to
        empty strings, and the date values to null.
        */

        this.onOriginChange = this.onOriginChange.bind(this);
        this.onDestinationChange = this.onDestinationChange.bind(this);
        this.departureDateChange = this.departureDateChange.bind(this);
        this.returnDateChange = this.returnDateChange.bind(this);
        this.onSearchFlights = this.onSearchFlights.bind(this);
    }

    onOriginChange(e) {
        /* TODO: capture origin and destination airport codes */
    }

    onDestinationChange(e) {
        /* TODO: capture origin and destination airport codes */
    }

    departureDateChange(date) {
        /*
        TODO: capture departure date.
        The 'date' argument is a moment.js object that has a .format() method
        to use to get the selected date in any format, e.g. 'YYYY-MM-DD' which
        the API will want later: date.format('YYYY-MM-DD')
        */
    }

    returnDateChange(date) {
        /*
        TODO: capture return date.
        The 'date' argument is a moment.js object that has a .format() method
        to use to get the selected date in any format, e.g. 'YYYY-MM-DD' which
        the API will want later: date.format('YYYY-MM-DD')
        */
    }

    onSearchFlights(event) {
        event.preventDefault();

        /* TODO: invoke the flight search (a function passed in from app.js) */
    }

    render() {
        return (
            <form className="fs-container" onSubmit={this.onSearchFlights}>
                <FormGroup controlId="origin" bsSize="large">
                    <FormControl
                        type="text"
                        placeholder="Origin"
                        /* TODO: hook up the value and callback to capture input */
                    />
                </FormGroup>
                <FormGroup controlId="destination" bsSize="large">
                    <FormControl
                        type="text"
                        placeholder="Destination"
                        /* TODO: hook up the value and callback to capture input */
                    />
                </FormGroup>
                <DatePicker
                    placeholderText="Departure date"
                    /* TODO: hook up the value (`selected` prop) and callback to capture departure date */
                />
                <DatePicker
                    placeholderText="Return date"
                    /* TODO: hook up the value (`selected` prop) and callback to capture return date */
                />
                <Button
                    type="submit"
                    bsStyle="primary"
                    style={{height: '46px'}}
                    bsSize="large"
                >
                  {'Search'}
                </Button>
            </form>
        );
    }
}
