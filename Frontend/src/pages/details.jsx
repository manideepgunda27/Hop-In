import React, { useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Container, Typography, Button } from '@mui/material';
import AuthContext from '../context/authContext';
function Details() {
    const navigate=useNavigate()
    const { user, logout } = useContext(AuthContext);
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = () => {
        console.log(user.name)
        console.log('Vehicle Number:', number);
        console.log('Vehicle Name:', name);
        navigate('/user-home')
    };

    const handleNumberChange = (e) => {
        // Convert the vehicle number input to uppercase
        setNumber(e.target.value.toUpperCase());
    };

    return (
        <Container maxWidth="sm" style={{ marginTop: '50px' }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Vehicle Details
            </Typography>
            <TextField
                label="Vehicle Number"
                variant="outlined"
                fullWidth
                margin="normal"
                value={number}
                onChange={handleNumberChange}
            />
            <TextField
                label="Vehicle Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                style={{ marginTop: '20px' }}
                fullWidth
            >
                Submit
            </Button>
        </Container>
    );
}

export default Details;
