import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { LoadScript } from '@react-google-maps/api';
import Authentication from './pages/authentication';
import HomePage from './pages/HomePage';
import AuthContext, { AuthProvider } from './context/authContext';
import RideContext, { RideProvider } from './context/rideContext'; // Import RideProvider
import UserHomePage from './pages/user-home';
import Details from './pages/details';
import RideForm from './components/createRide';

function App() {
    const libraries = ['places'];

    return (
        <AuthProvider>
            <RideProvider>
                <LoadScript
                    googleMapsApiKey=""
                    libraries={libraries}
                >
                    <Router>
                        <Routes>
                            <Route path="/Authentication" element={<Authentication />} />
                            <Route path="/home" element={<HomePage />} />
                            <Route
                                path="/"
                                element={
                                    <AuthContext.Consumer>
                                        {({ user }) =>
                                            user ? <Navigate to="/user-home" /> : <HomePage />
                                        }
                                    </AuthContext.Consumer>
                                }
                            />
                            <Route path="/user-home" element={<UserHomePage />} />
                            <Route path="/vehicle-detail" element={<Details />} />
                            <Route path="/create-ride" element={<RideForm />} />
                        </Routes>
                    </Router>
                </LoadScript>
            </RideProvider>
        </AuthProvider>
    );
}

export default App;
