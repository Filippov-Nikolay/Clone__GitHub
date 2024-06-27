import React from 'react';
import RepositoryCard from '../repository_card/repository_card';
import Forker from '../forker/forker';
import './repository_list.css';
import avatar1 from '../sources/images/Image_repo.png'
import avatar2 from '../sources/images/Frame(3).png'
const repositories = [
    { 
        user: "naver",
        repoName: "spalde", 
        description: "SPLADE: sparse neural search (SIGIR21, SIGIR22)", 
        language: "Python", 
        stars: 256, 
        userAvatar: avatar1
    },
    // other repositories
];
const forker = [
    {
        user: "akshaybahadur21",
        avatar: avatar2
    },
]
const RepositoryList = () => {
    return (
        <div className="repositoryList">
            
            <div className="repositoryList__forked"> 
                {forker.map((forker) => (
                <Forker 
                forkerName={forker.user}
                    forkerAvatar={forker.avatar} />
            ))}
            </div>
            <ul className="repositoryList__list">
                {repositories.map((repo, index) => (
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

export default RepositoryList;
