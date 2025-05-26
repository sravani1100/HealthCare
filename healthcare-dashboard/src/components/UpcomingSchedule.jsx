import React from 'react';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import { upcomingAppointments } from '../data/appointments';
import './UpcomingSchedule.css';

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h3 className="upcoming-schedule-title">The Upcoming Schedule</h3>
      
      <div className="schedule-section">
        <h4 className="schedule-day-title">On Thursday</h4>
        <div className="schedule-grid">
          {upcomingAppointments.thursday.map((appointment) => (
            <SimpleAppointmentCard 
              key={appointment.id} 
              appointment={appointment} 
            />
          ))}
        </div>
      </div>

      <div className="schedule-section">
        <h4 className="schedule-day-title">On Saturday</h4>
        <div className="schedule-grid">
          {upcomingAppointments.saturday.map((appointment) => (
            <SimpleAppointmentCard 
              key={appointment.id} 
              appointment={appointment} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule; 