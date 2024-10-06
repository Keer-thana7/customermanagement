import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { deleteCustomer } from './redux/reducers/customerReducer';
import './DeleteCustomer.css';  
import deleteIcon from './images/cross.png';

const DeleteCustomer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { customers } = useSelector(state => state.customers);
  const customer = customers.find(c => c.id === id);  

  if (!customer) {
    return <div>Customer not found</div>;
  }

  const handleDelete = () => {
    dispatch(deleteCustomer(id));
    navigate('/customerApp');
  };

  const handleCancel = () => {
    navigate('/customerApp');
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-container">
        <div className="modal-header">Delete Record?</div>
        <center><img className='logo' src={deleteIcon} alt='delete'/></center>
        <div className="modal-buttons">
          <button onClick={handleDelete} className="confirm-button">Delete</button>
          <button onClick={handleCancel} className="cancel-button">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteCustomer;
