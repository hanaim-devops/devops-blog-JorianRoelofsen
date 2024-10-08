import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'; // Ensure Page2 component exists

const App = () => (
    <Router>
        <Routes>
            <Route path="/Home" element={<Home />} />
        </Routes>
    </Router>
);

export default App;
