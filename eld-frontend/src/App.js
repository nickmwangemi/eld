import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TripForm from './components/TripForm';
import TripMap from './components/TripMap';
import LogSheet from './components/LogSheet';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [route, setRoute] = useState(null);
  const [logEntries, setLogEntries] = useState([]);

  const handleFormSubmit = async (tripData) => {
    try {
      console.log("Submitting trip data:", tripData);

      const response = await axios.post(
        'http://localhost:8000/api/trips/',
        tripData,
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      setRoute(response.data.route);
      setLogEntries(response.data.log_entries || []);
      toast.success('Trip data submitted successfully!', {
        position: 'top-right',
      });
    } catch (error) {
      console.error('Error submitting trip data:', error.response ? error.response.data : error.message);
      toast.error('Failed to submit trip data. Please try again.', {
        position: 'top-right',
      });
    }
  };

  return (
    <div className="container mt-5">
      <ToastContainer />
      <h1 className="text-center mb-4">ELD Log App</h1>
      <TripForm onSubmit={handleFormSubmit} />
      {route && <TripMap route={route} />}
      {logEntries.length > 0 && <LogSheet logEntries={logEntries} />}
    </div>
  );
};

export default App;
