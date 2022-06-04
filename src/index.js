import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Post from './Post';
import Services from './Services';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      
      <Route path="/" element={<App/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/post" element={<Post/>}/>

    </Routes>
  </Router>

);


