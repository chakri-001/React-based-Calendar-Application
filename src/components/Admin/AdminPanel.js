import React, { useState } from 'react';
import CompanyManagement from './CompanyManagement';
import CommunicationMethodManagement from './CommunicationMethodManagement';
import './AdminPanel.css';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('companies');

  return (
    <div className="admin-panel">
      <h1 className="title">Admin Panel</h1>
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'companies' ? 'active' : ''}`}
          onClick={() => setActiveTab('companies')}
        >
          Manage Companies
        </button>
        <button
          className={`tab ${activeTab === 'methods' ? 'active' : ''}`}
          onClick={() => setActiveTab('methods')}
        >
          Manage Communication Methods
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'companies' && <CompanyManagement />}
        {activeTab === 'methods' && <CommunicationMethodManagement />}
      </div>
    </div>
  );
};

export default AdminPanel;
