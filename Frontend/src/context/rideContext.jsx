import React, { createContext, useState } from 'react';
import axios from 'axios';

const RideContext = createContext();

export const RideProvider = ({ children }) => {
    const [rides, setRides] = useState([]);

    const createRide = async (rideData) => {
        const token = localStorage.getItem('token');
        console.log(rideData)
        console.log('Authorization Token:', token);

        try {
            const response = await axios.post(
                'http://localhost:3000/rides/new-ride',
                rideData,
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setRides(prevRides => [...prevRides, response.data]);
            return response.data;
        } catch (error) {
            console.error('Error creating ride:', error);
            throw error;
        }
    };

    return (
        <RideContext.Provider value={{ rides, createRide }}>
            {children}
        </RideContext.Provider>
    );
};

export default RideContext;
