
import '../../css/right-panel.css';
import React from 'react';
import LogoutButton from '../buttons/logout_button';

const RightPanel = () => {
  return (
    <aside className="right-sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Posts
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
          {/* Add as many rows as needed */}
        </ul>
      </div>
    </aside>
  );
};

export default RightPanel;
