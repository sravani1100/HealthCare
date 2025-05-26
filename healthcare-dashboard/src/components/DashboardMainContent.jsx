import React from 'react';
import { Search, Bell, Plus } from 'lucide-react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';
import './DashboardMainContent.css';

const DashboardMainContent = () => {
  return (
    <main className="dashboard-main">
      <div className="dashboard-header">
        <div className="dashboard-header-left">
          <div className="search-notification-wrapper">
            <div className="search-container">
              <Search className="search-icon" size={20} />
              <input 
                type="text" 
                placeholder="Search" 
                className="search-input"
              />
            </div>
            <button className="btn-icon notification-button">
              <Bell size={20} />
              <span className="notification-badge-absolute"></span>
            </button>
          </div>
          
          <h2 className="dashboard-title">Dashboard</h2>
        </div>

        <div className="dashboard-header-right">
          <div className="user-profile-square">
            <img 
              src="https://ui-avatars.com/api/?name=John+Doe&background=5B5FED&color=fff" 
              alt="User Avatar" 
              className="user-avatar-square"
            />
          </div>

          <button className="add-button-square">
            <Plus size={20} />
          </button>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-left">
          <div className="anatomy-health-section">
            <AnatomySection />
            <HealthStatusCards />
          </div>
          
          <ActivityFeed />
        </div>

        <div className="dashboard-right">
          <CalendarView />
          <UpcomingSchedule />
        </div>
      </div>
    </main>
  );
};

export default DashboardMainContent; 