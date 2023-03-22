import './App.css';
import React from "react";
import Navbar from './component/Navbar';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import MovieLink from './pages/MovieLink';
import Users from './pages/Users';
import Detail from './pages/Detail';
import Footer from './component/Footer';

function App3() {
    
    return(
    <div className="App">
        <Navbar />
        <Routes>
            <Route path="/app3" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="MovieLink" element={<MovieLink />} />
            <Route path="/Detail/:id" element={<Detail />} />
            <Route path="users" element={<Users />} />
        </Routes>
        <Footer />
    </div>
    );
}

export default App3;
