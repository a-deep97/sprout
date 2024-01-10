
import { useNavigate } from 'react-router-dom';
import '../../css/left-panel.css';
import React from 'react';
import CreateSproutButton from '../buttons/create_sprout_button';

const LeftPanel = () => {

  const navigate = useNavigate()
  const handleHomeLink = () => {
    navigate('/home')
  }
  const handleDashboardLink = () =>{
    navigate('/dashboard')
  }
  return (
    <aside className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <CreateSproutButton/>
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
          {/* Add more rows for different functions */}
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
