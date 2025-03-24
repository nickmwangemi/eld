import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        {children}
      </div>
    </div>
  );
};

export default Layout;