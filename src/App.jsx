import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Companies from './components/Companies.jsx';
import AboutUs from './components/AboutUs.jsx';
import StudentsPlaced from './components/StudentsPlaced.jsx';
import StudentsReview from './components/StudentsReview.jsx';
import Awards from './components/Awards.jsx';
import Footer from './components/Footer.jsx';
import Contact from './components/Contact';

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="Companies" element={<Companies />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="students-placed" element={<StudentsPlaced />} />
        <Route path="students-review" element={<StudentsReview />} />
        <Route path="contact" element={<Contact />} />
        <Route path="awards" element={<Awards />} />
      </Routes>
      <Footer />
      
    </div>
  </Router>
);

export default App;
