import React from 'react';
import './SimpleAppointmentCard.css';

const SimpleAppointmentCard = ({ appointment }) => {
  return (
    <div className="simple-appointment-card">
      <div className="appointment-info">
        <h4 className="appointment-title">{appointment.title}</h4>
        <span className="appointment-time-text">{appointment.time}</span>
      </div>
      
      <div className="appointment-icon-wrapper">
        <span className="appointment-icon-emoji">{appointment.icon}</span>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard; 