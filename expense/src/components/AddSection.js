import React, { useState } from 'react';
import './AddSection.css';

const AddSection = () => {
  const [sectionName, setSectionName] = useState('');

  const handleAddSection = () => {
    // Logic to add a section (will be connected to the backend later)
    console.log(`New section added: ${sectionName}`);
    setSectionName('');
  };

  return (
    <div className="add-section">
      <input 
        type="text" 
        value={sectionName} 
        onChange={e => setSectionName(e.target.value)} 
        placeholder="New Section Name" 
      />
      <button onClick={handleAddSection}>Add Section</button>
    </div>
  );
};

export default AddSection;
