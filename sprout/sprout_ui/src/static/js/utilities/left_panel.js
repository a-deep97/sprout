
import '../../css/left-panel.css';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import Avatar from './avatar';
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
      <div className='logo-section'></div>
      <div className='profile-section'>
        <Avatar/>
        <div className='user-info'>
          <div className='user-name'>Aman Deep</div>
          <hr className='custom-hr'/>
        </div>
      </div>
      <div className="sidebar-links">
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
        </ul>
      </div>
    </aside>
  );
};

export default LeftPanel;
