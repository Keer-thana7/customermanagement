import React from 'react';

const CustomerList = ({ customers, deleteCustomer, setEditingCustomer }) => {
    return (
        <div className="customer-list">
            <h2>Customer List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone number</th>
                        <th>Email</th>
                        <th>Country</th>
                        <th>State</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(customer => (
                        <tr key={customer.id}>
                            <td>{customer.name}</td>
                            <td>{customer.phonenumber}</td>
                            <td>{customer.email}</td>
                            <td>{customer.country}</td>
                            <td>{customer.state}</td>
                            <td>
                                <button onClick={() => setEditingCustomer(customer)}>Edit</button>
                                <button onClick={() => deleteCustomer(customer.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CustomerList;
