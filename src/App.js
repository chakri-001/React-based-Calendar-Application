import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Shared/Navbar';
import Dashboard from './components/User/Dashboard';
import CalendarView from './components/User/CalendarView';
import CompanyManagement from './components/Admin/CompanyManagement';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/calendar" element={<CalendarView />} />
          <Route path="/admin" element={<CompanyManagement />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
