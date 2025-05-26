import React from 'react';
import { healthStatusCards } from '../data/healthData';
import './HealthStatusCards.css';

const HealthStatusCards = () => {
  return (
    <div className="health-status-cards">
      {healthStatusCards.map((card) => (
        <div key={card.id} className="health-card">
          <div className="health-card-header">
            <span className="health-card-icon">{card.icon}</span>
            <h4 className="health-card-title">{card.title}</h4>
          </div>
          
          <p className="health-card-date">{card.date}</p>
          
          <div className="health-progress">
            <div className="progress-bar">
              <div 
                className={`progress-fill ${card.status}`}
                style={{ width: `${card.progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards; 