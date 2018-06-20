import React, {PureComponent} from 'react';
import './FlightSearch.css';
import {FormGroup, FormControl, Button} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class extends PureComponent {
    constructor(props) {
        super(props);

        this.onInputChange = this.onInputChange.bind(this);
        this.departureDateChange = this.departureDateChange.bind(this);
        this.returnDateChange = this.returnDateChange.bind(this);
        this.onSearchFlights = this.onSearchFlights.bind(this);
    }

    onInputChange(e) {
        /* TODO: capture origin and destination airport codes */
    }

    departureDateChange(date) {
        /* TODO: capture departure date */
    }

    returnDateChange(date) {
        /* TODO: capture return date */
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
