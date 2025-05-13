import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Welcome to Franchise Tracker</h1>
      <button>Add Franchise</button>
      <div className="franchise-cards">
        <div className="franchise-card">
          <h2>Toronto Maple Leafs</h2>
          <p>Seasons: 5</p>
          <p>Stanley Cups: 2</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
