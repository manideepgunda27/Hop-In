import React from 'react';


const SearchRideForm = () => {
  return (
    <div className="search-ride-form">
      <h3>Find a Ride</h3>
      <form>
        <input type="text" placeholder="Pickup Location" />
        <input type="text" placeholder="Drop Location" />
        <input type="date" placeholder="Date" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchRideForm;
