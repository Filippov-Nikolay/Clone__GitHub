import React from 'react';
import './vb_App.css';
import Profile from './profile/profile';
import TopRepositories from './top_repositories/top_repositories';
import RecentActivity from './recent_activity/recent_activity';
import Teams from './teams/teams';
import TempHeader from './temp_header/temp_header'; //not used anymore DELETEME
import { Header}  from '../globalComponents/header/header.js'
import FeedHeader from './feed_header/feed_header';
import RepositoryList from './repository_list/repository_list';
import TrendingRepositories from './trending_repositories/trending_repositories';
import TopicBasedRepositories from './topic_based_repositories/topic_based_repositories';
import RecommendedUsers from './recommended_users/recommended_users';
import Feed from './feed/feed';
import LatestChanges from './latest_changes/latest_changes';
import ExploreRepositories from './explore_repos/explore_repos';
import { Footer } from '../globalComponents/footer/footer.js';
const VbApp = () => {
    return (
        <div className="vb-app">
            <Header/>
            <div className='vb-app-contain'>
            <div className="panels">
                <div className="left-panel">
                    <Profile />
                    <TopRepositories />
                    <RecentActivity />
                    <Teams />
                </div>
                <div className="center-panel">
                    <FeedHeader />
                    <RepositoryList />
                    <TrendingRepositories />
                    <TopicBasedRepositories />
                    <RecommendedUsers />
                </div>
                <div className="right-panel">
                <Feed />
                <LatestChanges />
                <ExploreRepositories />
                </div>
            </div>
            
            </div>
            <Footer/>
        </div>
    );
};

export default VbApp;
