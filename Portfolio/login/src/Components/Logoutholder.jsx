import React from 'react';
import '../styel.css';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode'; // Correctly import jwtDecode
import logouticon from '../assets/logouticon.svg';
import Login from '../Login'; // Assuming Login component is correctly imported

export default function Logoutholder({ ison, setIson }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);
      const role = localStorage.getItem('role');
      if (decoded.role !== role) {
        return;
      }
    }
    
    localStorage.removeItem('username');
    localStorage.removeItem('role');
    localStorage.removeItem('token');
    console.log('Logout successful');
    navigate('/Login'); // Navigate to the login page after logout
  };

  return (
    <div className={`Logoutholder${ison ? ' open' : ''}`}>
      <div className="Logoutholder-item" onClick={handleLogout}>
        <img src={logouticon} className='icon' alt="logout icon" />
        <a>Logout</a>
      </div>
    </div>
  );
}
