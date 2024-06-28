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
        <Route path="Clone__GitHub/" element={<Index />} />
        <Route path="/Clone__GitHub/profile" element={<Profile />} />
        <Route path="/Clone__GitHub/vb-profile" element={<VbProfile/>}/>
        <Route path="/Clone__GitHub/vb-app" element={<VbApp/>}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;