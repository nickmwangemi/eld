import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import TripForm from './components/TripForm';
import TripMap from './components/TripMap';
import LogSheet from './components/LogSheet';
import Layout from "./components/Layout";

const AppRouter = () => {
  return (
    <Router>
        <Layout/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/trip-form" element={<TripForm />} />
        <Route path="/trip-map" element={<TripMap />} />
        <Route path="/log-sheet" element={<LogSheet />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
