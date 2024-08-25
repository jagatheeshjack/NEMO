import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidedrawer from '../Components/Sidedrawer';
import swal from 'sweetalert';


const UserTable = (key) => {
  const [users, setUsers] = useState([]);
  const  fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/users'); 
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const edituser=async()=>{
    try {
      await swal({
        title: "Done.!",
        text:  "Edit Button Clicked",
        icon:  "success",
      button:  "ok",
      });
    } catch (error) {
      
    }
  }
  const deleteuser=async(email)=>{
   const confirmation = await swal({
    title: "Are you sure.?",
    text:"Do want to delete the user permanently",
    button:true,
    dangerMode:true
   });
   try {
      await axios.delete(`http://localhost:5000/api/deleteuserAcc/${email}`);
   } catch (error) {
      console.error("Error in deletion",error);
   }

   if(confirmation){
    swal("Deleted!", "The user has been deleted.", "success");
    fetchUsers();
   }
  }
  const viewuser =async()=>{
    try {
      await swal({
        title: "Done.!",
        text:  "View Button Clicked",
        icon:  "success",
      button:  "ok",
      });
    } catch (error) {
      
    }
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
      setIsModalOpen(true);
  };

  const closeModal = () => {
      fetchUsers();
      setIsModalOpen(false);
  };

  return (
    <div>
      <h2>User List</h2>
      <button className='adduser' onClick={openModal}>Add

        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#000000">
        <text  x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="20" fill="black">Add</text>
        <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
        </svg></button>
      {isModalOpen && <Sidedrawer closeModal={closeModal} />}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Role</th>
            <th>Phone Number</th>
            <th>Email ID</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.user_id}>
              <td>{user.user_id}</td>
              <td>{user.username}</td>
              <td>{user.role}</td>
              <td>{user.phone_number}</td>
              <td>{user.email}</td>
              <td>
              <svg xmlns="http://www.w3.org/2000/svg"    onClick={edituser}   style={{cursor:'pointer'}}height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm263-224 37-39-37-37-38 38 38 38Z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg"    onClick={()=>deleteuser(user.email)} style={{cursor:'pointer'}}height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg"    onClick={viewuser}   style={{cursor:'pointer'}}height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-480H200v480Zm280-80q-82 0-146.5-44.5T240-440q29-71 93.5-115.5T480-600q82 0 146.5 44.5T720-440q-29 71-93.5 115.5T480-280Zm0-60q56 0 102-26.5t72-73.5q-26-47-72-73.5T480-540q-56 0-102 26.5T306-440q26 47 72 73.5T480-340Zm0-100Zm0 60q25 0 42.5-17.5T540-440q0-25-17.5-42.5T480-500q-25 0-42.5 17.5T420-440q0 25 17.5 42.5T480-380Z"/></svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
