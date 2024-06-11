import React from 'react';
import './vb_App.css';
import Profile from './profile/profile';
import TopRepositories from './top_repositories/top_repositories';
import RecentActivity from './recent_activity/recent_activity';
import Teams from './teams/teams';
import TempHeader from './temp_header/temp_header';
const App = () => {
    return (
        <div className="app">
           <TempHeader  />
            <div className="panels">
            <div className="left-panel">
                <Profile />
                <TopRepositories />
                <RecentActivity />
                <Teams />
            </div>
            <div className="center-panel">
                {/* Center panel */}
            </div>
            </div>
        </div>
    );
};

export default App;
