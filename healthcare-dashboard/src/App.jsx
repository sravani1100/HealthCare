import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app-wrapper">
      <div className="app-container">
        <div className="app">
          <div className="app-body">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
