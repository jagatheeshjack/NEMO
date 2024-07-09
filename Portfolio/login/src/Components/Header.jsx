import React, { useEffect, useState } from 'react';
import '../styel.css'; // Corrected the filename typo
import penlogo from '../assets/penlogo.png';
import logo from '../assets/Logo.png'
import Sidebar from './Sidebar';
import Logoutholder from './Logoutholder';

export default function Header() { // Added component name
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false); 

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedRole = localStorage.getItem('role');
    console.log(`Stored username: ${storedUsername}`); // Debugging log
    console.log(`Stored role: ${storedRole}`); // Debugging log

    if (storedUsername) {
      setUsername(storedUsername);
      console.log(`Username state updated: ${storedUsername}`);
    }
    if (storedRole) {
      setRole(storedRole);
      console.log(`Role state updated: ${storedRole}`);
    }
  }, []); // Added empty dependency array4

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);

  };

  const toggleLogout = () => {
    setIsLogoutOpen(!isLogoutOpen);
    console.log(`'setIsLogoutOpen'${!isLogoutOpen}`);
  };
  console.log(`'setIsSidebarOpen'${isLogoutOpen}`);

  return (
    <div>
      <section>
        <div className='logcard'>
          <img src={penlogo} onClick={toggleSidebar}/>
          <h2>NEMO</h2>
          <div className='UserDtl'>
              <div className='user-info'>
                <span className='username'>{username}</span>
                <span className='role'>{role}</span>
              </div>
              <img src={logo}  onClick={toggleLogout}/>
          </div>
        </div>
        <Logoutholder ison={isLogoutOpen}/>
      </section>            
      <Sidebar isOpen={isSidebarOpen}/>
 
    </div>
  );
}
