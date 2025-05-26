import React from 'react';
import { generalLinks, toolsLinks, settingsLink } from '../data/navigationData';
import './Sidebar.css';

const Sidebar = () => {
  const renderNavLink = (link, isActive = false) => {
    const Icon = link.icon;
    return (
      <a
        key={link.id}
        href={link.path}
        className={`sidebar-link ${isActive ? 'active' : ''}`}
      >
        <Icon size={20} className="sidebar-icon" />
        <span className="sidebar-link-text">{link.label}</span>
      </a>
    );
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1 className="sidebar-logo">Health<span className="logo-accent">care.</span></h1>
      </div>
      
      <div className="sidebar-content">
        <div className="sidebar-section">
          <h3 className="sidebar-section-title">General</h3>
          <nav className="sidebar-nav">
            {generalLinks.map((link) => renderNavLink(link, link.id === 'dashboard'))}
          </nav>
        </div>

        <div className="sidebar-section">
          <h3 className="sidebar-section-title">Tools</h3>
          <nav className="sidebar-nav">
            {toolsLinks.map((link) => renderNavLink(link))}
          </nav>
        </div>
      </div>

      <div className="sidebar-bottom">
        <nav className="sidebar-nav">
          {renderNavLink(settingsLink)}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar; 