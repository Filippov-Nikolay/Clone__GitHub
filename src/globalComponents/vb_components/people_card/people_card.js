import React from 'react';
import './people_card.css';

const Users = ({ user,userName,userAvatar,description }) => {
    return (
        <div className="user-info">
            <div className='user-info-wrapper'>
                <div className="user-header">
                <img src={userAvatar} alt={`${user}'s avatar`} className="repo-avatar" />
                    <span className="user-owner">{user}/</span>
                    <span className="user-name">{userName}</span>
                </div>
                <div className="user-description">{description}</div>
            </div>
                <div className='repo-button'><button >Follow</button> </div>
        </div>
            
       
    );
};

export default Users;
