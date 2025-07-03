import React, { useState, useEffect } from 'react';
import './ApiData.css';

const ApiData = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/c/47e1-6810-4ad8-9d93');
        await response.json();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="stats-container">
      <h2>User Statistics</h2>
      {stats ? (
        <ul>
        </ul>
      ) : (
        <p>Loading stats...</p>
      )}
    </div>
  );
};

export default ApiData;


