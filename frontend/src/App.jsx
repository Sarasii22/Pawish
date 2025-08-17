
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Landingpg from './pages/Landingpg/Landingpg';
import Login from './pages/Login/Login';
import Pets from './pages/Pets/Pets'

// Layout component to include Navbar and Footer
const Layout = ({ children }) => (
  <div>
    <Navbar />
    {children}
    <Footer />
  </div>
);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Landingpg />
            </Layout>
          }
        />

        <Route
          path='/pets'
          element={
            <Layout>
              <Pets />
            </Layout>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
