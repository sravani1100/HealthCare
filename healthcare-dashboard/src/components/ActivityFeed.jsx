import React from 'react';
import { activityData } from '../data/appointments';
import './ActivityFeed.css';

const ActivityFeed = () => {
  const maxValue = 100; // Set max value for consistent scaling

  return (
    <div className="activity-feed">
      <div className="activity-header">
        <h3 className="activity-title">Activity</h3>
        <p className="activity-subtitle">
          {activityData.weeklyAppointments} appointment on this week
        </p>
      </div>

      <div className="activity-chart">
        {activityData.chartData.map((data) => (
          <div key={data.day} className="chart-day-container">
            <div className="chart-bars-wrapper">
              {data.bars.map((bar, index) => (
                <div 
                  key={index}
                  className={`chart-bar ${bar.type}`}
                  style={{ height: `${(bar.value / maxValue) * 100}%` }}
                ></div>
              ))}
            </div>
            <span className="chart-label">{data.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed; 