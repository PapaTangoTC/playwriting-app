import React from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<div>Home Page</div>} />
        </Routes>
    </Router>
);
export default App;
