import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const isAdmin = token && JSON.parse(atob(token.split('.')[1])).role === 'admin';

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">PAWISH</div>
      <div className="navbar-links">
        <Link to="/homepage" className="nav-link">Home</Link>
        <Link to="/pets" className="nav-link">Pets</Link>
        <Link to="/donate" className="nav-link">Donate</Link>
        <Link to="/alert" className="nav-link">Pet Alert</Link>
        <Link to="/application" className="nav-link">Surrender Pet</Link>
        {isAdmin && <Link to="/admin" className="nav-link">Admin</Link>}
        {token && <button className="button" onClick={handleLogout}>Logout</button>}
      </div>
    </nav>
  );
};

export default Navbar;