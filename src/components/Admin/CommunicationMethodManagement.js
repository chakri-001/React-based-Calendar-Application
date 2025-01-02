import React, { useState } from 'react';
import './CommunicationMethodManagement.css';

const CommunicationMethodManagement = () => {
  const [methods, setMethods] = useState([
    { name: 'LinkedIn Post', description: 'Post on LinkedIn', mandatory: true },
    { name: 'LinkedIn Message', description: 'Send a message on LinkedIn', mandatory: true },
    { name: 'Email', description: 'Send an email', mandatory: false },
    { name: 'Phone Call', description: 'Call on phone', mandatory: false },
    { name: 'Other', description: 'Any other method', mandatory: false },
  ]);

  return (
    <div className="method-management">
      <h2>Communication Method Management</h2>
      <ul>
        {methods.map((method, index) => (
          <li key={index}>
            <strong>{method.name}</strong>: {method.description} 
            {method.mandatory ? ' (Mandatory)' : ''}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunicationMethodManagement;
