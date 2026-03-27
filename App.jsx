import { useState } from 'react';
import Counter from './Counter';
import Tasks from './Tasks';
import './App.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('counter');

  return (
    <div className="app">
      <div className="navbar">
        <div className="navbar-container">
          <h1 className="app-title">📊 FSD Lab 4</h1>
          <nav className="nav-tabs">
            <button
              className={`nav-btn ${activeTab === 'counter' ? 'active' : ''}`}
              onClick={() => setActiveTab('counter')}
            >
              🧮 Counter
            </button>
            <button
              className={`nav-btn ${activeTab === 'tasks' ? 'active' : ''}`}
              onClick={() => setActiveTab('tasks')}
            >
              ✓ Tasks
            </button>
          </nav>
        </div>
      </div>

      <div className="container">
        <div className="content">
          {activeTab === 'counter' && <Counter />}
          {activeTab === 'tasks' && <Tasks />}
        </div>
      </div>

      <footer className="footer">
        <p>React Frontend + Node.js Backend | FSD Lab 4</p>
      </footer>
    </div>
  );
}
