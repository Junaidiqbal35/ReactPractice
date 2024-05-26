import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from "./Components/Home.jsx";
import SongList from "./Components/SongList.jsx";

function App() {
    return (
        <>
          <h2> Hello world </h2>

        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/signup" className="nav-link">Signup</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/songs" className="nav-link">Songs</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                {/* Redirect to login by default */}
                <Route path="/home" element={<Home />} />
                <Route path="/songs" element={<SongList />} />
            </Routes>
        </Router>
            </>
    );
}

export default App;
