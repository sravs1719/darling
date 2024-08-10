import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import HospitalRegistration from './components/HospitalRegistration';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<HospitalRegistration />} />
            </Routes>
        </Router>
    );
}

export default App;
