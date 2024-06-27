import React from 'react';
import FeederCard from '../feeder_card/feeder_card';
import './feed_header.css';

const FeedHeader = () => {
    return (
        <div className="feedHead">
            <FeederCard 
                title="Welcome to the new feed!"
                description="We're updating the cards and ranking all the time, so check back regularly. At first, you might need to follow some people or star some repositories to get started. 🌱"
                feedbackLink="#"
            />
            {/* Other components */}
        </div>
    );
};

export default FeedHeader;
