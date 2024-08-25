import React, { useState } from 'react';
import swal from 'sweetalert';
import UserTable from '../Admin/UserTable';
const Sidedrawer = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailId: '',
    phoneNo: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const addUser = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    try {
      const response = await fetch('http://localhost:5000/addUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Response not ok');
      }
      const data = await response.json();
      setMessage('User Created Successfully');
      setFormData({
        firstName: '',
        lastName: '',
        emailId: '',
        phoneNo: ''
      });
      await swal({
        title: "Done.!",
        text: "User Created Successfully..!",
        icon: "success",
        button: "ok",
      });
  

    } catch (error) {
      setError('Error while creating User: ' + error.message);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-btn" onClick={closeModal}>&times;</span>
        <form onSubmit={addUser}>
          <div className='row'>
            <div className='col-4'>
              <label>First name:</label>
            </div>
            <div className='col-8'>
              <input
                type="text"
                name="firstName"
                className='custom-input'
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder='First Name'
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-4'>
              <label>Last name:</label>
            </div>
            <div className='col-8'>
              <input
                type="text"
                name="lastName"
                className='custom-input'
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder='Last Name'
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-4'>
              <label>Email ID:</label>
            </div>
            <div className='col-8'>
              <input
                type="email"
                name="emailId"
                id="emailId"
                value={formData.emailId}
                onChange={handleChange}
                placeholder='example@gmail.com'
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-4'>
              <label>Phone No:</label>
            </div>
            <div className='col-8'>
              <input
                type="text"
                name="phoneNo"
                className='custom-input'
                value={formData.phoneNo}
                onChange={handleChange}
                id="phoneNo"
                placeholder='845166498'
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12" id='adduser'>
              <button type="submit">Save</button>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              {message && <p className="success-message">{message}</p>}
              {error && <p className="error-message">{error}</p>}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sidedrawer;
