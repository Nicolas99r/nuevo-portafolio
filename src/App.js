import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <NavMenu/>
      <ScrollToTop/>
      <Routes>
        <Route path='/about' element={<About/>}>
          
        </Route>
        <Route path='/projects' element={<Projects/>}>
          
        </Route>
        <Route path='/contact' element={<Contact/>}>
          
        </Route>
        <Route path='/' element={<Home/>}>
          
        </Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
