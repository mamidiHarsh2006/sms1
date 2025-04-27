import React from 'react';
import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      <div className="home-card">
        <h1 className="home-title">Welcome to Student Management</h1>
        <p className="home-subtitle">Manage all your students easily and efficiently!</p>
        
        <div className="home-buttons">
          <button
            className="home-btn view-btn"
            onClick={() => navigate('/students')}
          >
            📚 View Students
          </button>
          <button
            className="home-btn add-btn"
            onClick={() => navigate('/add')}
          >
            ➕ Add Student
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
