import { useNavigate } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/authContext';

function User() {
    const { user, logout } = useContext(AuthContext);
    const [userName, setUserName] = useState('');
    const navigate=useNavigate()
    useEffect(() => {
        if (user) {
            setUserName(user.name);
        }
    }, [user]); // This will run whenever 'user' changes

    // Handle logout
    const handleLogout = () => {
        logout(); // Log the user out
        navigate('/home')
    };

    // If user is null and the page is still loading, you can show a fallback
    if (!user) {
        return <h1>Loading...</h1>; // You can also display a "Please log in" message here
    }

    return (
        <div>
            <h1>Welcome {userName}, to your dashboard!</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default User;
