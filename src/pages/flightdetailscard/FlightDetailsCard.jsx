import React from 'react';
import PropTypes from 'prop-types';

const FlightDetailsCard = ({ flights }) => {

    console.log("flight details coming",flights);
    return (
        <div className="flight-details-card-container">
            {/* <h2>All Flight Details</h2> */}
            {flights.map((flight) => (
                <div key={flight._id} className="flight-card">
                    <h3>{flight.airlineName}</h3>
                    <p>Flight Number: {flight.airlineNo}</p>
                    <p>Departure Date: {flight.departureTime}</p>
                    <p>Source: {flight.from}</p>
                    <p>Destination: {flight.to}</p>
                    <p>Price: {flight.fare}</p>
                </div>
            ))}
        </div>
    );
};

export default FlightDetailsCard;