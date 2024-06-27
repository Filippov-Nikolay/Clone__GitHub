import React from 'react';
import LatestChangesCard from '../latest_changes_card/latest_changes_card';
import './latest_changes.css';

const LatestChanges = () => {
    const changes = [
        "Secret scanning changes to how you opt in to notifications",
        "Code scanning shows more accurate and relevant alerts on pull requests",
        "SSH Certificate requirement update",
        "Fixed bug that allowed removed users to retain access to the organization"
    ];

    return (
        <div className="latest_changes">
            <LatestChangesCard changes={changes} />
        </div>
    );
};

export default LatestChanges;
