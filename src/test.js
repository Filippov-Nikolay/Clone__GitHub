import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App'; // Main App component
import { Profile } from './shvetsComponents/profile';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;