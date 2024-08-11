import React, { useEffect, useState } from 'react';
import api from '../services/api';  // Import the Axios instance

const SectionList = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    // Fetch sections from the backend
    api.get('/sections')
      .then(response => {
        setSections(response.data);
      })
      .catch(error => {
        console.error('Error fetching sections:', error);
      });
  }, []);

  return (
    <div>
      <h2>Sections</h2>
      <ul>
        {sections.map(section => (
          <li key={section._id}>{section.name}: ${section.balance}</li>
        ))}
      </ul>
    </div>
  );
};

export default SectionList;
