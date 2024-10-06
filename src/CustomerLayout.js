import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import './CustomerLayout.css';

const CustomerLayout = () => {
  return (
    <div className="customer-layout">
      <Sidebar />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default CustomerLayout;
