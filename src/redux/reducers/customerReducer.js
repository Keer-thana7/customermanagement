
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
console.log('API_URL:', API_URL);

export const fetchCustomers = createAsyncThunk('customers/fetchCustomers', async () => {
    const response = await axios.get(API_URL);
    return response.data;
});

export const fetchCustomerDetails = createAsyncThunk('customers/fetchCustomerDetails', async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
});

export const addCustomer = createAsyncThunk('customers/addCustomer', async (customer) => {
    const response = await axios.post(API_URL, customer);
    return response.data;
});

export const updateCustomer = createAsyncThunk('customers/updateCustomer', async (customer) => {
    const response = await axios.put(`${API_URL}/${customer.id}`, customer);
    return response.data;
});

export const deleteCustomer = createAsyncThunk('customers/deleteCustomer', async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
});

const customerSlice = createSlice({
    name: 'customers',
    initialState: {
        customers: [],
        customerDetails: {},
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCustomers.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCustomers.fulfilled, (state, action) => {
                state.loading = false;
                state.customers = action.payload;
            })
            .addCase(fetchCustomers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchCustomerDetails.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCustomerDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.customerDetails[action.payload.id] = action.payload;
            })
            .addCase(fetchCustomerDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(addCustomer.fulfilled, (state, action) => {
                state.customers.push(action.payload);
            })
            .addCase(updateCustomer.fulfilled, (state, action) => {
                const index = state.customers.findIndex(customer => customer.id === action.payload.id);
                if (index !== -1) {
                    state.customers[index] = action.payload;
                }
            })
            .addCase(deleteCustomer.fulfilled, (state, action) => {
                state.customers = state.customers.filter(customer => customer.id !== action.payload);
            });
    },
});

export default customerSlice.reducer;
