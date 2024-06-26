import React from 'react';
import { MdPersonAddAlt1 } from "react-icons/md";
import Users from '../people_card/people_card';
import './recommended_users.css';

const recommendedUsers = [
    { user: "Saurabh Mittal", userAvatar: "/path/to/avatar1.png", description: "Software engineer | DTU" },
    { user: "shivam7374", userAvatar: "/path/to/avatar2.png", description: "Software engineer | XYZ" },
    // other users
];

const RecommendedUsers = () => {
    return (
        <div className="recommendedUsers">
            <h2 className="recommendedUsers__title">Based on your topics</h2>
            <ul className="recommendedUsers__list">
                {recommendedUsers.map((users, index) => (
                    <Users
                        key={index}
                        user={users.user}
                        repoName={users.repoName}
                        description={users.description}
                        userAvatar={users.userAvatar}
                    />
                ))}
            </ul>
        </div>
    );
};

export default RecommendedUsers;
