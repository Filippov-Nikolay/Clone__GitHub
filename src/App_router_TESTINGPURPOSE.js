import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App'; // Main App component
import VbApp from './globalComponents/vb_components/vb_App'; // vb_App component

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/vb-app" element={<VbApp />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
