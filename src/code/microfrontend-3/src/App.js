import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page2 from './Page2'; // Ensure Page2 component exists

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Page2 />} />
        </Routes>
    </Router>
);

export default App;
