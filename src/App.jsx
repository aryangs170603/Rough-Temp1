import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
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
    <Hero />
    <Companies />
    <AboutUs />
    <StudentsPlaced />
    <StudentsReview />
    <Awards />
    <Footer />
  </div>
);

export default App;