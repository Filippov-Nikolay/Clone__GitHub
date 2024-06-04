import React from 'react';
import './top_repositories.css';

const repositories = [
    "Vector",
    "MorphixUI",
    "gitagpt3",
    "figma-html",
    "mygita-client",
    "upvox-client",
    "alibi"
];

const TopRepositories = () => {
    return (
        <div className="top-repositories">
            <h2>Top Repositories</h2>
            <input type="text" placeholder="Find a repository..." />
            <ul>
                {repositories.map((repo, index) => (
                    <li key={index}>{repo}</li>
                ))}
            </ul>
        </div>
    );
}; 
export default TopRepositories;
