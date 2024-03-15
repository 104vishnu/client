
import React, { useState } from 'react';
import FlightDetailsCard from '../flightdetailscard/FlightDetailsCard.jsx';
import newRequest from '../../utils/newRequest.js';
import './Home.scss';

const Home = () => {
    const [searchByAirline, setSearchByAirline] = useState({ airlineName: '', airlineNo: '', date: '' });
    const [searchByRoute, setSearchByRoute] = useState({ source: '', destination: '', date: '' });
    const [airlineFlights, setAirlineFlights] = useState(null);
    const [routeFlights, setRouteFlights] = useState(null);
    const [showFlightDetails, setShowFlightDetails] = useState(false);

    const handleAirlineSearchChange = (e) => {
        setSearchByAirline({ ...searchByAirline, [e.target.name]: e.target.value });
    };

    const handleRouteSearchChange = (e) => {
        setSearchByRoute({ ...searchByRoute, [e.target.name]: e.target.value });
    };

    const handleAirlineSearchSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await newRequest.post("/flight/details", searchByAirline);
            const { data } = response;
            //console.log(data.flights);
            setAirlineFlights(Array.isArray(data.flights) ? data.flights : data.flights ? [data.flights] : null);
            //console.log(airlineFlights)
            setShowFlightDetails(true);
        } catch (error) {
            console.error('Error fetching flights by airline:', error);
        }
    };
    
    const handleRouteSearchSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await newRequest.post("/flight/details", searchByRoute);
            const { data } = response;
            setRouteFlights(Array.isArray(data.flights) ? data.flights : data.flights ? [data.flights] : null);
            setShowFlightDetails(true);
        } catch (error) {
            console.error('Error fetching flights by route:', error);
        }
    };
    

    return (
        <div className="home">
            <div className="flight-search">
                <h2>Search for Flights by Airline</h2>
                <form onSubmit={handleAirlineSearchSubmit}>
                    <input
                        type="text"
                        name="airlineName"
                        placeholder="Airline Name"
                        value={searchByAirline.airlineName}
                        onChange={handleAirlineSearchChange}
                    />
                    <input
                        type="text"
                        name="airlineNo"
                        placeholder="Airline Number"
                        value={searchByAirline.airlineNo}
                        onChange={handleAirlineSearchChange}
                    />
                    <input
                        type="date"
                        name="date"
                        value={searchByAirline.date}
                        onChange={handleAirlineSearchChange}
                    />
                    <button type="submit">Search by Airline</button>
                </form>
            </div>
            <div className="flight-search">
                <h2>Search for Flights by Route</h2>
                <form onSubmit={handleRouteSearchSubmit}>
                    <input
                        type="text"
                        name="source"
                        placeholder="Source"
                        value={searchByRoute.source}
                        onChange={handleRouteSearchChange}
                    />
                    <input
                        type="text"
                        name="destination"
                        placeholder="Destination"
                        value={searchByRoute.destination}
                        onChange={handleRouteSearchChange}
                    />
                    <input
                        type="date"
                        name="date"
                        value={searchByRoute.date}
                        onChange={handleRouteSearchChange}
                    />
                    <button type="submit">Search by Route</button>
                </form>
            </div>
            {showFlightDetails && (
                <div className="flight-details">
                    <h2>All Flight Details</h2>
                    {/* console.log(airlineFlights); */}
                    <FlightDetailsCard flights={airlineFlights} />
                </div>
            )}
        </div>
    );
};

export default Home;

