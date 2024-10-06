import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link,Outlet,useLocation,useNavigate} from 'react-router-dom';
import { fetchCustomers } from './redux/reducers/customerReducer';
import './CustomerApp.css';


const CustomerApp = () => {
    const location=useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { customers, loading, error } = useSelector(state => state.customers);

    const [currentPage, setCurrentPage] = useState(1);
    const [customersPerPage, setCustomersPerPage] = useState(10);

    useEffect(() => {
        dispatch(fetchCustomers());
    }, [dispatch]);

    useEffect(() => {
        console.log("Customers:", customers); // Log customers array
    }, [customers]);
  
    const indexOfLastCustomer = currentPage * customersPerPage;
    const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
    const currentCustomers = customers.slice(indexOfFirstCustomer, indexOfLastCustomer);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    const handleCustomersPerPageChange = (e) => {
        setCustomersPerPage(e.target.value);
        setCurrentPage(1); // Reset to first page
    }

    const handleLogout = () => {
        sessionStorage.clear(); // Clear session storage
        navigate('/login'); // Redirect to login page
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="container">
            <header>
                <h1>Customers</h1>
                <div className="search-export">
                    <button onClick={handleLogout} className="logout-button">Logout</button>
                    <Link to="/create" className="export-button">Create New Customer</Link>
                </div>
            </header>
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
                    {currentCustomers.map(customer => (
                        <tr key={customer.id}>
                            <td>{customer.name}</td>
                            <td>{customer.phonenumber}</td>
                            <td>{customer.email}</td>
                            <td>{customer.country}</td>
                            <td>{customer.state}</td>
                            <td className="actions">
                                <Link to={`/customer/${customer.id}`} className="view">👁️</Link>
                                <Link to={`/edit/${customer.id}`} className="edit">✏️</Link>
                                <Link to={`/delete/${customer.id}`} state={{backgroundLocation:location}}  className='delete'>🗑️</Link>
                                <Outlet/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination-container">
                <div className="coupons-per-page">
                    <span>Coupons per page</span>
                    <select value={customersPerPage} onChange={handleCustomersPerPageChange}>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={30}>30</option>
                    </select>
                </div>
                <div className="pagination">
                    <button onClick={() => paginate(1)} disabled={currentPage === 1}>
                        &#171;
                    </button>
                    <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                        &#8249;
                    </button>
                    {Array.from({ length: Math.ceil(customers.length / customersPerPage) }, (_, index) => (
                        <button key={index} className={currentPage === index + 1 ? 'active' : ''} onClick={() => paginate(index + 1)}>
                            {index + 1}
                        </button>
                    ))}
                    <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(customers.length / customersPerPage)}>
                        &#8250;
                    </button>
                    <button onClick={() => paginate(Math.ceil(customers.length / customersPerPage))} disabled={currentPage === Math.ceil(customers.length / customersPerPage)}>
                        &#187;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CustomerApp;
