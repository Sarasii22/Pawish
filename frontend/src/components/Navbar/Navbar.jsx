import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you have a CSS file for styling

// Placeholder for authentication context (replace with your actual auth context)
//const AuthContext = React.createContext();

const Navbar = () => {
  //const { isLoggedIn } = useContext(AuthContext);

//   const getHomeLink = () => {
//     return isLoggedIn ? '/home' : '/landing';
//   };

  return (
    <nav className="navbar">
      <div className="navbar-brand">PAWISH</div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/pets" className="nav-link">Our Pets</Link>
        <Link to="/donate" className="nav-link">Donate</Link>
        <Link to="/alert" className="nav-link">Alert</Link>
      </div>
    </nav>
  );
};

export default Navbar;