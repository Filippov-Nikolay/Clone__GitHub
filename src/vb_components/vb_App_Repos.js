import React from 'react';
import './vb_App.css';

import RepoSearchInit from './repo_search_init/repo_search_init';
const App_repos = () => {
    return (
        <div className="app">
            <div className="panels">

                <div className="center-panel">
                    <RepoSearchInit />
                </div>

            </div>
        </div>
    );
};

export default App_repos;
