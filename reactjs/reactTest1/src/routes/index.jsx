import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { Home } from '../components/routesComponents/home';
import { PrivatePage } from '../components/routesComponents/PrivatePage';
// import { LoginPrivate } from '../components/routesComponents/loginPrivate';

import { FormReactPuro } from '../components/forms/index2';

const PrivateRoute = ({ element }) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');

    // return isAuthenticated === 'true' ? element : <Login />;
    return isAuthenticated === 'true' ? element : <FormReactPuro />;
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
                <Route path="/login" element={<FormReactPuro />} />
            </Routes>
        </Router>
    );
};

export default RoutePrivate;
