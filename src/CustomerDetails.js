import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCustomers } from './redux/reducers/customerReducer';
import './CustomerDetails.css';

const CustomerDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { customers, loading, error } = useSelector(state => state.customers);
    const customer = customers.find(c => c.id === id);

    useEffect(() => {
        if (!customers.length) {
            dispatch(fetchCustomers());
        }
    }, [dispatch, customers.length]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!customer) {
        return <div>Customer not found</div>;
    }

    return (
        <div className="customer-details">
            <h2>General Details</h2>
            <div className="general-details">
                <div>
                    <h3>{customer.name}</h3>
                    <p>Customer ID: {customer.id}</p>
                </div>
            </div>
            <h3>Basic Details</h3>
            <div className="details">
                <div><strong>Customer Name:</strong> {customer.name}</div>
                <div><strong>Customer Email:</strong> {customer.email}</div>
                <div><strong>Customer Phone Number:</strong> {customer.phonenumber}</div>
            </div>
            <h3>Address Details</h3>
            <div className="details">
                <div><strong>First Name:</strong> {customer.firstname}</div>
                <div><strong>Last Name:</strong> {customer.lastname}</div>
                <div><strong>Alternate Phone Number:</strong> {customer.alternatephonenumber}</div>
                <div><strong>Address Line 1:</strong> {customer.addressline1}</div>
                <div><strong>Address Line 2:</strong> {customer.addressline2}</div>
                <div><strong>State:</strong> {customer.state}</div>
                <div><strong>City:</strong> {customer.city}</div>
                <div><strong>Country:</strong> {customer.country}</div>
                <div><strong>Pincode:</strong> {customer.pincode}</div>
            </div>
        </div>
    );
};

export default CustomerDetails;
