import React from 'react';
import Navbar from './components/Navbar/Navbar'; // Assuming you have a CSS file for styling
import Footer from './components/Footer/Footer';
import Landingpg from './pages/Landingpg/Landingpg';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landingpg />
      <Footer />
    </div>
  );
}

export default App;
