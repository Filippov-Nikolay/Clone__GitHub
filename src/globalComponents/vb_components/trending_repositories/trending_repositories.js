import React from 'react';
import RepositoryCard from '../repository_card/repository_card';
import { LuLineChart } from "react-icons/lu";
import './trending_repositories.css';
import avatar1 from '../sources/images/Image_repo.png'

const trendingRepositories = [
    { 
        user: "Author3",
        repoName: "alpaca-lora", 
        description: "Instruct-tune LLaMA on consumer hardware", 
        language: "Jupyter Notebook", 
        stars: 2400, 
        forkedBy: "UserC", 
        userAvatar: avatar1 
    },
    { 
        user: "Author4",
        repoName: "semantic-kernel", 
        description: "Integrate cutting-edge LLM technology quickly and easily into your apps", 
        language: "C#", 
        stars: 810, 
        forkedBy: "UserD", 
        userAvatar: avatar1
    },
    // other repositories
];

const TrendingRepositories = () => {
    return (
        <div className="trendingRepositories">
            <span className="trendingRepositories__title"><LuLineChart /> Trending repositories ·  <a href='#'> Show More </a></span>
            <ul className="trendingRepositories__list">
                {trendingRepositories.map((repo, index) => (
                    <RepositoryCard 
                        key={index}
                        user={repo.user}
                        repoName={repo.repoName}
                        description={repo.description}
                        language={repo.language}
                        stars={repo.stars}
                        forkedBy={repo.forkedBy}
                        userAvatar={repo.userAvatar}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TrendingRepositories;
