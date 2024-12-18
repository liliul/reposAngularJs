import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const PrivateRoute = ({ element, ...rest }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');

  return isAuthenticated === 'true' ? element : <Login />;
};

const Home = () => <div><h2>Home Page</h2><Link to="/login">Login</Link></div>;

const PrivatePage = () => <div><h2>Private Page - Only Authenticated Users can Access</h2></div>;

const Login = () => {
  const handleLogin = () => {
    localStorage.setItem('isAuthenticated', 'true');
    window.location.href = '/private';
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

const RoutePrivate = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/private">Private Page</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/private" element={<PrivateRoute element={<PrivatePage />} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default RoutePrivate;
