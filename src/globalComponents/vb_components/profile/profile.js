import React from 'react';
import './profile.css';
import img_avatar from '../sources/avatar_account.png'
//Profile JS code
const Profile = () => {
    return (
        <div className="profile">
            <img src= {img_avatar} alt="Profile" className="profile-picture" />
            <div className="username">chiragsingla17</div>
        </div>
    );
};

export default Profile;
