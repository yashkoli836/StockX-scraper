import React from 'react';

const LoadingIndicator: React.FC = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="loader"></div>
            <span className="ml-2">Loading...</span>
        </div>
    );
};

export default LoadingIndicator;