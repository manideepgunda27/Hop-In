import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Navbar1 from '../components/Navbar1';
import LocationPicker from '../components/LocationPicker';
import MapDisplay from '../components/MapDisplay';
import { Grid, Container } from '@mui/material';
import RideRequest from '../components/LocationPicker';
import Footer from '../components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Container maxWidth="xl" sx={{ marginTop: 6, marginBottom: 6, height: '100vh' }}> {/* Full screen width */}
        <Grid container spacing={6}> {/* Increased spacing between the grid items */}
            <Grid item xs={12} md={6} style={{ height: '100%' }}> {/* Full height for components */}
            <RideRequest />
            </Grid>
            <Grid item xs={12} md={6} style={{ height: '100%' }}>
            <MapDisplay />
            </Grid>
        </Grid>
      </Container>
      <Footer/>

    </div>
  );
}

export default App;
