import React from 'react';
import './HomePage.css';
import AddSection from '../components/AddSection';

const HomePage = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h2 className="home-title">Manage Your Savings</h2>
        <AddSection />
      </div>
    </div>
  );
};

export default HomePage;
