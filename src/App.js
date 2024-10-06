import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CustomerLayout from './CustomerLayout';
import CustomerApp from './CustomerApp';
import CustomerDetails from './CustomerDetails';
import CustomerForm from './CustomerForm';
import DeleteCustomer from './DeleteCustomer';
import Login from './Login';
import Register from './Register';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<CustomerLayout />}>
        <Route path="/customerApp" element={<CustomerApp />} />
        <Route path="/customer/:id" element={<CustomerDetails />} />
        <Route path="/create" element={<CustomerForm />} />
        <Route path="/edit/:id" element={<CustomerForm />} />
        <Route path="/delete/:id" element={<DeleteCustomer />} />
      </Route>
    </Routes>
  );
};

export default App;
