
import '../../css/left-panel.css';
import { useNavigate } from 'react-router-dom';
import React from 'react';
const LeftPanel = () => {

  const navigate = useNavigate()
  const handleHomeLink = () => {
    navigate('/home')
  }
  const handleDashboardLink = () =>{
    navigate('/dashboard')
  }
  return (
    <aside className="left-panel">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" onClick={handleHomeLink}>
                Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={handleDashboardLink}>
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Categories
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Tags
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Users
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default LeftPanel;
