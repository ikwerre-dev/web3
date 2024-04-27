import React from 'react';
import './ProgressBar.css'; // Make sure the CSS file is correctly linked

const ProgressBar = ({ progress }) => {
    return (
        <div className="progress-container">
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
    );
};

export default ProgressBar;
