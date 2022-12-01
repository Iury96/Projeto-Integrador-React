import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Apresentacao from './pages/Apresentacao';
import About from './pages/Sobre';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Contact from './pages/Contato';

function App() {
  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Apresentacao />}/>
        <Route path='/sobre' element={<About />}/>
        <Route path='/contato' element={<Contact />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </Router>
  );
}

export default App;