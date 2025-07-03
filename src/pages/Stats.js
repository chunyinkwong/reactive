import React, { useState, useEffect } from 'react';
import './Stats.css';

const Stats = () => {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/c/47e1-6810-4ad8-9d93')
      .then(response => response.json())
      .then(data => {
        if (data && data.technologies) {
          setTechnologies(data.technologies);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="stats-container">
      <h2>Technology Usage Statistics</h2>
      <div className="bar-chart-container">
        {technologies.length > 0 ? (
          technologies.map((tech, index) => {
            let label = tech.name;
            if (label === 'React') label = 'React 🤮🤮🤮';
            if (label === 'Svelte') label = 'Svelte 🔥🔥🔥';
            return (
              <div key={index} className="bar-item">
                <span className="bar-label">{label}</span>
                <div className="bar-wrapper">
                  <div className="bar" style={{ width: `${tech.share}%` }}></div>
                </div>
                <span className="bar-value">{tech.share}%</span>
              </div>
            );
          })
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </div>
  );
};

export default Stats;


