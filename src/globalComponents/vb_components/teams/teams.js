import React from 'react';
import './teams.css';

const Teams = () => {
    return (
        <div className="teams">
            <h2>Your teams</h2>
            <input type="text" placeholder="Find a team..." class="input-placeholder" id="teamInput" />
            <p>deterministic-algorithms-lab/auto-dub</p>
        </div>
    );
};

export default Teams;
