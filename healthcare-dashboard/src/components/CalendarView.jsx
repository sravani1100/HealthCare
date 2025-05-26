import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { calendarAppointments, appointmentDetails } from '../data/appointments';
import './CalendarView.css';

const CalendarView = () => {
  const daysOfWeek = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  
  // Current week - October 25-31, 2021
  const currentWeekDays = [
    { date: 25, dayIndex: 0 },
    { date: 26, dayIndex: 1 },
    { date: 27, dayIndex: 2 },
    { date: 28, dayIndex: 3 },
    { date: 29, dayIndex: 4 },
    { date: 30, dayIndex: 5 },
    { date: 31, dayIndex: 6 }
  ];

  const getAppointmentsForDate = (date) => {
    if (!date) return [];
    const dateKey = `2021-10-${date.toString().padStart(2, '0')}`;
    return calendarAppointments[dateKey] || [];
  };

  return (
    <div className="calendar-section">
      <div className="calendar-container">
        <div className="calendar-header">
          <h3 className="calendar-month">October 2021</h3>
          <div className="calendar-month-nav">
            <button className="calendar-nav-btn">
              <ChevronLeft size={16} />
            </button>
            <button className="calendar-nav-btn">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className="calendar-week-grid">
          {currentWeekDays.map((day, index) => (
            <div key={day.date} className="calendar-week-column">
              <div className="calendar-day-header">
                {daysOfWeek[day.dayIndex]}
              </div>
              <div className={`calendar-week-day ${day.date === 26 ? 'selected' : ''}`}>
                <span className="calendar-date">{day.date}</span>
                <div className="calendar-appointments">
                  {getAppointmentsForDate(day.date).map((time, idx) => (
                    <div key={idx} className="appointment-time">
                      {time}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="appointment-details">
        {appointmentDetails.map((appointment) => (
          <div 
            key={appointment.id} 
            className="appointment-card"
            style={{ backgroundColor: appointment.color }}
          >
            <div className="appointment-card-header">
              <span className="appointment-type" style={{ color: appointment.id === 'dentist-1' ? 'white' : '#333' }}>
                {appointment.type}
              </span>
              <span className="appointment-icon">{appointment.icon}</span>
            </div>
            <div className="appointment-time-slot" style={{ color: appointment.id === 'dentist-1' ? 'rgba(255,255,255,0.9)' : '#666' }}>
              {appointment.time}
            </div>
            <div className="appointment-doctor" style={{ color: appointment.id === 'dentist-1' ? 'rgba(255,255,255,0.8)' : '#666' }}>
              {appointment.doctor}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView; 