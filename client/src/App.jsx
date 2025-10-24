// client/src/App.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // <-- IMPORT
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer /> {/* <-- ADD HERE */}
    </div>
  );
}

export default App;

