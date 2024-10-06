import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addCustomer, updateCustomer } from './redux/reducers/customerReducer';
import './CustomerForm.css';

const CustomerForm = ({ customer }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const { customers } = useSelector(state => state.customers);

    const [formData, setFormData] = useState({
        id: null,
        name:'',
        firstName: '',
        lastName: '',
        phonenumber: '',
        alternatephonenumber: '',
        email: '',
        country: '',
        state: '',
        city:'',
        pincode:'',
        addressline1: '',
        addressline2: ''
    });

    useEffect(() => {
        if (id) {
            const customer = customers.find(c => c.id === id);
            if (customer) {
                setFormData(customer);
            }
        }
    }, [id, customers]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            dispatch(updateCustomer(formData));
        } else {
            dispatch(addCustomer(formData));
        }
        navigate('/customerApp');
    };

    return (
        <div className="customer-form">
            <h2>{id ? 'Edit Customer' : 'Create New Customer'}</h2>
            <form onSubmit={handleSubmit}>
                <h3>Basic Details</h3>
                <div className="details">
                    <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                    <input type="text" name="phonenumber" placeholder="Phone Number" value={formData.phonenumber} onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                </div>
                <h3>Address Details</h3>
                <div className='details'>
                    <input type="text" name="firstName" placeholder="First Name" value={formData.firstname} onChange={handleChange} required />
                    <input type="text" name="lastName" placeholder="Last Name" value={formData.lastname} onChange={handleChange} required />
                    <input type="text" name="alternatephonenumber" placeholder="Alternate Phone Number" value={formData.alternatephonenumber} onChange={handleChange} required />
                    <input type="text" name="addressline1" placeholder="Address1" value={formData.addressline1} onChange={handleChange} required />
                    <input type="text" name="addressline2" placeholder="Address2" value={formData.addressline2} onChange={handleChange} required />
                    <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} required />
                    <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
                    <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} required />
                    <input type="text" name="pincode" placeholder="Pin Code" value={formData.pincode} onChange={handleChange} required />
                </div>
                <div className="form-actions">
                    <button type="button" className="go-back" onClick={() => navigate(-1) } >Go Back</button>
                    <button type="submit" className="update">{id ? 'Update' : 'Add'} Customer</button>
                </div>
            </form>
        </div>
    );
};

CustomerForm.propTypes = {
    customer: PropTypes.shape({
        id: PropTypes.string,
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        phonenumber: PropTypes.string,
        alternatephonenumber: PropTypes.string,
        email: PropTypes.string,
        country: PropTypes.string,
        state: PropTypes.string,
        addressline1: PropTypes.string,
        city:PropTypes.string,
        addressline2: PropTypes.string,
        pincode:PropTypes.string

    })
};

export default CustomerForm;
