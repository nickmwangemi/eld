import React from 'react';
import { MapContainer, TileLayer, Polyline } from 'react-leaflet';

const TripMap = ({ route }) => {
  return (
    <div className="mt-4">
      <MapContainer center={[0, 0]} zoom={2} style={{ height: "400px", width: "100%" }} className="border rounded">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {route && <Polyline positions={route} color="blue" />}
      </MapContainer>
    </div>
  );
};

export default TripMap;
