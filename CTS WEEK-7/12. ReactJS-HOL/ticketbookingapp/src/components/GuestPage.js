import React from "react";
import FlightDetails from "./FlightDetails";

const GuestPage = () => {
  return (
    <div>
      <h1>Welcome, Guest!</h1>
      <p>Please log in to book tickets.</p>
      <FlightDetails />
    </div>
  );
};

export default GuestPage;
