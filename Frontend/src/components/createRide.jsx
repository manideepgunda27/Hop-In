import React, { useState, useRef, useContext} from 'react';
import axios from 'axios';
import { TextField, Button, Grid, Typography, Box } from '@mui/material';
import { GoogleMap, LoadScript, Autocomplete, DirectionsRenderer } from '@react-google-maps/api';
import RideContext from '../context/rideContext';

const RideForm = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [availableSeats, setAvailableSeats] = useState(1);
  const [pricePerSeat, setPricePerSeat] = useState(0);
  const [vehicle, setVehicle] = useState('');
  const [directions, setDirections] = useState(null);
  const { createRide } = useContext(RideContext);
  const originRef = useRef(null);
  const destinationRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const rideData = { origin, destination, departureTime, availableSeats, pricePerSeat, vehicle };
    try {
        console.log(rideData)
        const newRide = await createRide(rideData); 
        console.log('Ride created successfully:', newRide);
    } catch (error) {
        console.error('Error creating ride:', error);
    }
  };


  const handleGetDirections = () => {
    const directionsService = new google.maps.DirectionsService();
    directionsService.route(
      {
        origin,
        destination,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          setDirections(result);
        } else {
          console.error(`Error fetching directions: ${status}`);
        }
      }
    );
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4, p: 2 }}>
      {/* Form Section */}
      <Box sx={{ flex: 1, maxWidth: '45%', p: 2 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>Create a Ride</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Autocomplete
                onLoad={(autocomplete) => (originRef.current = autocomplete)}
                onPlaceChanged={() =>
                  setOrigin(originRef.current.getPlace().formatted_address)
                }
              >
                <TextField
                  label="Origin"
                  fullWidth
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  required
                />
              </Autocomplete>
            </Grid>

            <Grid item xs={12}>
              <Autocomplete
                onLoad={(autocomplete) => (destinationRef.current = autocomplete)}
                onPlaceChanged={() =>
                  setDestination(destinationRef.current.getPlace().formatted_address)
                }
              >
                <TextField
                  label="Destination"
                  fullWidth
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  required
                />
              </Autocomplete>
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Departure Time"
                type="datetime-local"
                fullWidth
                value={departureTime}
                onChange={(e) => setDepartureTime(e.target.value)}
                required
                InputLabelProps={{ shrink: true }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Available Seats"
                type="number"
                fullWidth
                value={availableSeats}
                onChange={(e) => setAvailableSeats(e.target.value)}
                required
                InputProps={{ inputProps: { min: 1 } }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Price Per Seat"
                type="number"
                fullWidth
                value={pricePerSeat}
                onChange={(e) => setPricePerSeat(e.target.value)}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Vehicle Model"
                fullWidth
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <Button variant="contained" color="secondary" fullWidth onClick={handleGetDirections}>
                Get Directions
              </Button>
            </Grid>

            <Grid item xs={12}>
              <Button variant="contained" color="primary" fullWidth type="submit">
                Create Ride
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>

      {/* Map Section */}
      <Box sx={{ flex: 1, height: '500px', ml: 2 }}>
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={{ lat: 37.7749, lng: -122.4194 }} // Default center
          zoom={8}
        >
          {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
      </Box>
    </Box>
  );
};

export default RideForm;
