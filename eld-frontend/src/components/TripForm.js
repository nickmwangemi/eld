import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";

const TripForm = ({ onSubmit }) => {
  const [currentLocation, setCurrentLocation] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [currentCycleUsed, setCurrentCycleUsed] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentLocation || !pickupLocation || !dropoffLocation || !currentCycleUsed) {
      setError('All fields are required');
      return;
    }

    const tripData = {
      current_location: currentLocation,
      pickup_location: pickupLocation,
      dropoff_location: dropoffLocation,
      current_cycle_used: parseInt(currentCycleUsed, 10)
    };

    console.log("Form data:", { currentLocation, pickupLocation, dropoffLocation, currentCycleUsed });
    console.log("tripData:", tripData);

    setError('');
    onSubmit(tripData);
    navigate('/'); // Navigate to home page after submission
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <div className="mb-3">
        <label className="form-label fw-bold">Current Location:</label>
        <input type="text" className="form-control" value={currentLocation} onChange={(e) => setCurrentLocation(e.target.value)} required />
      </div>
      <div className="mb-3">
        <label className="form-label fw-bold">Pickup Location:</label>
        <input type="text" className="form-control" value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)} required />
      </div>
      <div className="mb-3">
        <label className="form-label fw-bold">Dropoff Location:</label>
        <input type="text" className="form-control" value={dropoffLocation} onChange={(e) => setDropoffLocation(e.target.value)} required />
      </div>
      <div className="mb-3">
        <label className="form-label fw-bold">Current Cycle Used (Hrs):</label>
        <input type="number" className="form-control" value={currentCycleUsed} onChange={(e) => setCurrentCycleUsed(e.target.value)} required />
      </div>
      {error && <p className="text-danger">{error}</p>}
      <button type="submit" className="btn btn-primary w-100">Submit</button>
    </form>
  );
};

export default TripForm;
