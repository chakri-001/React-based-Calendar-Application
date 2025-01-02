import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1>Communication Tracker</h1>
        <div>
          <a href="/">Dashboard</a>
          <a href="/calendar">Calendar</a>
          <a href="/admin">Admin</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
