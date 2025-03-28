import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar1 = () => {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Hopin
        </Typography>
        <Button color="inherit">Help</Button>
        <Button color="inherit">Log in</Button>
        <Button variant="outlined" color="primary">Sign up</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar1;
