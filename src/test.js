import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import { Profile } from './shvetsComponents/profile';
import { VbProfile } from './vb_components/profile';
import  VbApp  from './vb_components/vb_App'
import Index from './Nikolay/Index'
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/vb-profile" element={<VbProfile/>}/>
        <Route path="/vb-app" element={<VbApp/>}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;