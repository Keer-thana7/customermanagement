import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import logo from './images/Lo.png';
import home from './images/home.png';
import i4 from './images/Component 4.png';
import i5 from './images/Component 5.png';
import i6 from './images/Component 6.png';
import i7 from './images/Component 7.png';
import i8 from './images/Component 8.png';
import i9 from './images/Component 9.png';
import i10 from './images/Component 10.png';
import i11 from './images/Component 11.png';
import i12 from './images/Component 12.png';
import i13 from './images/Component 13.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact="true">
              <img src={home} alt="home" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/" exact="true">
              <img src={i4} alt="i4" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/" exact="true">
              <img src={i5} alt="i5" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/" exact="true">
              <img src={i6} alt="i6" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/" exact="true">
              <img src={i7} alt="i7" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/" exact="true">
              <img src={i8} alt="i8" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/" exact="true">
              <img src={i9} alt="i9" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/" exact="true">
              <img src={i10} alt="i10" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/" exact="true">
              <img src={i11} alt="i11" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/" exact="true">
              <img src={i12} alt="i12" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/" exact="true">
              <img src={i13} alt="i13" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
