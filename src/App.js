import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Login from "./pages/Login/Login";

const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="login" element={<Login/>}/>
                </Routes>
            </Router>
        </div>
    );
};

export default App;