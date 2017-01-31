import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const App = ({ children }) => (
  <div>
    <div className='wrapper'>
      <Navbar />
      { children }
    </div>
    <Footer />
  </div>
);

export default App;