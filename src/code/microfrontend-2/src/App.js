import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page1 from './Page1';

const App = () => (
    <Router>
        <Routes>
            <Route path="/page1" element={<Page1 />} />
        </Routes>
    </Router>
);

export default App;
