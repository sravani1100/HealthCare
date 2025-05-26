import React from 'react';
import { ChevronRight } from 'lucide-react';
import { anatomicalIndicators } from '../data/healthData';
import anatomyImage from '../assets/images/anatomy1.png';
import './AnatomySection.css';

const AnatomySection = () => {
  return (
    <div className="anatomy-section">
      <div className="anatomy-container">
        <img 
          src={anatomyImage} 
          alt="Human Anatomy" 
          className="anatomy-image"
        />
        
        {/* Scan squares */}
        <div className="scan-square heart-scan"></div>
        <div className="scan-square leg-scan"></div>
        
        {anatomicalIndicators.map((indicator) => (
          <div 
            key={indicator.id}
            className="anatomy-indicator"
            style={{
              top: indicator.position.top,
              left: indicator.position.left
            }}
          >
            <div className={`indicator-dot ${indicator.status}`}></div>
            <div className="indicator-line"></div>
            <div className={`indicator-label ${indicator.status}`}>
              {indicator.id === 'heart' && <span className="label-icon">❤️</span>}
              {indicator.id === 'log' && <ChevronRight size={16} className="label-icon" />}
              {indicator.label}
            </div>
          </div>
        ))}
      </div>
      
      {/* Bottom control */}
      <div className="anatomy-control">
        <div className="control-icon"></div>
      </div>
    </div>
  );
};

export default AnatomySection; 