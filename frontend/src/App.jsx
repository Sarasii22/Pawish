import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Landingpg from './pages/Landingpg/Landingpg';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import HomePage from './pages/Homepage/Homepage';
import Pets from './pages/Pets/Pets';
import Donate from './pages/Donate/Donate';
import PetAlert from './pages/PetAlert/PetAlert';
import AdoptionApplication from './pages/AdoptionApplication/AdoptionApplication';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<><Navbar /><Landingpg /><Footer /></>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/homepage" element={<><Navbar /><HomePage /><Footer /></>} />
        <Route path="/pets" element={<><Navbar /><Pets /><Footer /></>} />
        <Route path="/donate" element={<><Navbar /><Donate /><Footer /></>} />
        <Route path="/alert" element={<><Navbar /><PetAlert /><Footer /></>} />
        <Route path="/application" element={<><Navbar /><AdoptionApplication /><Footer /></>} />
        <Route path="/admin/*" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
};

export default App;