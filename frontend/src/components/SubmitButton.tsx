import React from 'react';

interface SubmitButtonProps {
    onClick: () => void;
    loading: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick, loading }) => {
    return (
        <button
            onClick={onClick}
            disabled={loading}
            className={`px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
            {loading ? 'Submitting...' : 'Submit'}
        </button>
    );
};

export default SubmitButton;