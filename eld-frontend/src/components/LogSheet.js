import React from 'react';

const LogSheet = ({ logEntries = [] }) => {
  return (
    <div className="mt-4">
      <h2 className="mb-3">Log Sheet</h2>
      {logEntries.length > 0 ? (
        logEntries.map((entry, index) => (
          <div key={index} className="border-bottom pb-3 mb-3">
            <p><strong>Time:</strong> {entry.timestamp}</p>
            <p><strong>Location:</strong> {entry.location}</p>
            <p><strong>Activity:</strong> {entry.activity}</p>
          </div>
        ))
      ) : (
        <p>No log entries available.</p>
      )}
    </div>
  );
};

export default LogSheet;
