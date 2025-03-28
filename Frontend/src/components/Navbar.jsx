import React from 'react';
import '../styles/Navbar.css';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('token'); // Check if user is logged in

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
          <h1>Carpool</h1>
        </div>
        <button className="navbar-button">Ride</button>
        <button className="navbar-button" onClick={() => navigate('/create-ride')}>Drive</button>
      </div>
      <div className="navbar-right">
        {!isLoggedIn ? (
          <>
            <button className="navbar-button" onClick={() => navigate('/Authentication')}>Login</button>
            <button className="navbar-button navbar-signup">Signup</button>
          </>
        ) : (
          <button className="navbar-button" onClick={() => { /* Logout logic here */ }}>Logout</button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
