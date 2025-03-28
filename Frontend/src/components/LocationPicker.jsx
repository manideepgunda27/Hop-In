import React, { useState } from 'react';
import { Box, TextField, Button, IconButton, Typography } from '@mui/material';
import { Autocomplete } from '@react-google-maps/api';
import NearMeIcon from '@mui/icons-material/NearMe'; // Icon for location
import CircleIcon from '@mui/icons-material/Circle'; // Icon for pickup
import SquareIcon from '@mui/icons-material/Square'; // Icon for destination

function RideRequest({ onSetPickup, onSetDrop, onRequestDirections }) {
  const [autocompletePickup, setAutocompletePickup] = useState(null);
  const [autocompleteDrop, setAutocompleteDrop] = useState(null);

  const handlePickupPlaceChanged = () => {
    if (autocompletePickup) {
      const place = autocompletePickup.getPlace();
      if (place && place.formatted_address) {
        onSetPickup(place.formatted_address);
      }
    }
  };

  const handleDropPlaceChanged = () => {
    if (autocompleteDrop) {
      const place = autocompleteDrop.getPlace();
      if (place && place.formatted_address) {
        onSetDrop(place.formatted_address);
      }
    }
  };

  const handleSeePrices = () => {
    if (onRequestDirections) {
      onRequestDirections(); // Trigger directions rendering in MapDisplay
    }
  };

  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', mt: 4, p: 2 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Request a ride for now or later
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Add your trip details, hop in, and go.
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <CircleIcon sx={{ mr: 1 }} />
        <Autocomplete
          onLoad={(autoC) => setAutocompletePickup(autoC)}
          onPlaceChanged={handlePickupPlaceChanged}
        >
          <TextField
            fullWidth
            placeholder="Enter pickup location"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <IconButton edge="end">
                  <NearMeIcon />
                </IconButton>
              ),
            }}
          />
        </Autocomplete>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <SquareIcon sx={{ mr: 1 }} />
        <Autocomplete
          onLoad={(autoC) => setAutocompleteDrop(autoC)}
          onPlaceChanged={handleDropPlaceChanged}
        >
          <TextField
            fullWidth
            placeholder="Enter destination"
            variant="outlined"
          />
        </Autocomplete>
      </Box>

      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSeePrices}
        >
          See prices
        </Button>
        <Button
          variant="outlined"
          color="primary"
          fullWidth
        >
          Schedule for later
        </Button>
      </Box>
    </Box>
  );
}

export default RideRequest;
