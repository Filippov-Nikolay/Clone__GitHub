import React from 'react';
import { FaRegStar } from "react-icons/fa";
import './repository_card.css';

const RepositoryCard = ({ user, repoName, description, language, stars, userAvatar }) => {
    return (
        <div className="repo-info">
            <div className='repo-info-wrapper'>
                <div className="repo-header">
                <img src={userAvatar} alt={`${user}'s avatar`} className="repo-avatar" />
                    <span className="repo-owner">{user}/</span>
                    <span className="repo-name">{repoName}</span>
                </div>
                <div className="description">{description}</div>
                <div className="footer">
                    <span className="language">
                        <span className="language-color" style={{ backgroundColor: '#3572A5' }}></span>
                        {language}
                    </span>
                    <span className="stars"><FaRegStar className='star'/> {stars}</span>
                </div>
            </div>
                <div className='repo-button'><button  className='repo-button-left' ><FaRegStar />Star</button><button className='repo-button-right'>^</button> </div>
        </div>
            
       
    );
};

export default RepositoryCard;
