import React from 'react';


const OfferRideForm = () => {
  return (
    <div className="offer-ride-form">
      <h3>Offer a Ride</h3>
      <form>
        <input type="text" placeholder="Pickup Location" />
        <input type="text" placeholder="Drop Location" />
        <input type="date" placeholder="Date" />
        <input type="number" placeholder="Available Seats" />
        <button type="submit">Offer Ride</button>
      </form>
    </div>
  );
};

export default OfferRideForm;
