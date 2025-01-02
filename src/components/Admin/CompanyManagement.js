import React, { useState } from 'react';
import './CompanyManagement.css';

const CompanyManagement = () => {
  const [companies, setCompanies] = useState([]);
  const [newCompany, setNewCompany] = useState({
    name: '',
    location: '',
    linkedin: '',
    email: '',
    phone: '',
    comments: '',
    periodicity: '2 weeks',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCompany({ ...newCompany, [name]: value });
  };

  const addCompany = () => {
    setCompanies([...companies, { ...newCompany }]);
    setNewCompany({
      name: '',
      location: '',
      linkedin: '',
      email: '',
      phone: '',
      comments: '',
      periodicity: '2 weeks',
    });
  };

  return (
    <div className="company-management">
      <h2>Company Management</h2>
      <div className="form">
        <input
          type="text"
          name="name"
          placeholder="Company Name"
          value={newCompany.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={newCompany.location}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="linkedin"
          placeholder="LinkedIn Profile"
          value={newCompany.linkedin}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newCompany.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={newCompany.phone}
          onChange={handleInputChange}
        />
        <textarea
          name="comments"
          placeholder="Comments"
          value={newCompany.comments}
          onChange={handleInputChange}
        />
        <select
          name="periodicity"
          value={newCompany.periodicity}
          onChange={handleInputChange}
        >
          <option value="1 week">1 Week</option>
          <option value="2 weeks">2 Weeks</option>
          <option value="1 month">1 Month</option>
        </select>
        <button className="add-button" onClick={addCompany}>
          Add Company
        </button>
      </div>
      <div className="table">
        <h3>Company List</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>LinkedIn</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Comments</th>
              <th>Periodicity</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company, index) => (
              <tr key={index}>
                <td>{company.name}</td>
                <td>{company.location}</td>
                <td>{company.linkedin}</td>
                <td>{company.email}</td>
                <td>{company.phone}</td>
                <td>{company.comments}</td>
                <td>{company.periodicity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompanyManagement;
