import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Advanced from './components/Advanced';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Advanced />
      <Footer />
    </>
  );
}

export default App;
