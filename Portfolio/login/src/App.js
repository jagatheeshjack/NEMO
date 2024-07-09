import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate,useHistory } from 'react-router-dom';
import Login from './Login';
import Admin from './Admin/Admin';
import User from './User/User';
import Viewer from './Viewer/Viewer';
import { jwtDecode } from 'jwt-decode';

const App = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/Admin" element={<PrivateRoute role="Admin"><Admin /></PrivateRoute>} />
      <Route path="/User" element={<PrivateRoute role="User"><User /></PrivateRoute>} />
      <Route path="/viewer" element={<PrivateRoute role="viewer"><Viewer /></PrivateRoute>} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  </Router>
);

const PrivateRoute = ({ children, role }) => {
  const token = localStorage.getItem('token');
  if (!token) return <Navigate to="/login" />;

  const decoded = jwtDecode(token);
  if (decoded.role !== role) return <Navigate to="/login" />;

  return children;
};

export default App;