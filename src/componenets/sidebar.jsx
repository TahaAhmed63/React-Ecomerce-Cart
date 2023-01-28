import React from 'react';
import './sidebar.css';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Sidebar</h2>
      <ul>
        <li>
          <a href="#" className="menu-item">Menu item 1</a>
        </li>
        <li>
          <a href="#" className="menu-item">Menu item 2</a>
        </li>
        <li>
          <a href="#" className="menu-item">Menu item 3</a>
        </li>
        <li>
          <a href="#" className="menu-item">Menu item 4</a>
        </li>
      </ul>
    </div>
  );
};


