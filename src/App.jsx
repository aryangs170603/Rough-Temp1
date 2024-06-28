import React from 'react';

import './App.css';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Companies from './components/Companies.jsx';
import AboutUs from './components/AboutUs.jsx';
import StudentsPlaced from './components/StudentsPlaced.jsx';
import StudentsReview from './components/StudentsReview.jsx';
import Awards from './components/Awards.jsx';
import Footer from './components/Footer.jsx';


const App = () => (
  
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="companies" element={<Companies />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="students-placed" element={<StudentsPlaced />} />
        <Route path="students-review" element={<StudentsReview />} />
        <Route path="awards" element={<Awards />} />
        <Route path="contact-us" element={<ContactUs />} /> {/* Add this route */}
      </Routes>
      <Footer />
      </div>
  

);

export default App;
