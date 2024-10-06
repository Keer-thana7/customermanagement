import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const fetchCustomers = () => async dispatch => {
    dispatch({ type: 'FETCH_CUSTOMERS_REQUEST' });
    try {
        const response = await axios.get(API_URL);
        dispatch({ type: 'FETCH_CUSTOMERS_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'FETCH_CUSTOMERS_FAILURE', payload: error.message });
    }
};

export const addCustomer = customer => async dispatch => {
    try {
        const response = await axios.post(API_URL, customer);
        dispatch({ type: 'ADD_CUSTOMER_SUCCESS', payload: response.data });
    } catch (error) {
        console.error('Error adding customer:', error);
    }
};

export const updateCustomer = (id, updatedCustomer) => async dispatch => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, updatedCustomer);
        dispatch({ type: 'UPDATE_CUSTOMER_SUCCESS', payload: response.data });
    } catch (error) {
        console.error('Error updating customer:', error);
    }
};

export const deleteCustomer = id => async dispatch => {
    try {
        await axios.delete(`${API_URL}/${id}`);
        dispatch({ type: 'DELETE_CUSTOMER_SUCCESS', payload: id });
    } catch (error) {
        console.error('Error deleting customer:', error);
    }
};
