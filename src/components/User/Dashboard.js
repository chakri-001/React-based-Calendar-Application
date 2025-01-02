import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const data = [
    { id: 1, name: 'Company A', lastCommunications: ['Email (12/15)', 'Phone Call (12/10)'], nextCommunication: 'LinkedIn Post (12/25)', status: 'overdue' },
    { id: 2, name: 'Company B', lastCommunications: ['LinkedIn Post (12/14)', 'Email (12/09)'], nextCommunication: 'Phone Call (12/24)', status: 'due-today' },
    { id: 3, name: 'Company C', lastCommunications: ['LinkedIn Post (12/12)', 'Phone Call (12/05)'], nextCommunication: 'Email (12/28)', status: 'normal' },
  ];

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="cards">
        {data.map((company) => (
          <div key={company.id} className={`card ${company.status}`}>
            <h2>{company.name}</h2>
            <p><strong>Last Communications:</strong> {company.lastCommunications.join(', ')}</p>
            <p><strong>Next Communication:</strong> {company.nextCommunication}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
