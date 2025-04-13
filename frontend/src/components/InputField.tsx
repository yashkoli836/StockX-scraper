import React, { useState } from 'react';

const InputField: React.FC<{ onSubmit: (url: string) => void }> = ({ onSubmit }) => {
    const [url, setUrl] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (url) {
            onSubmit(url);
            setUrl('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center">
            <input
                type="text"
                value={url}
                onChange={handleChange}
                placeholder="Enter StockX product URL"
                className="border rounded p-2 flex-grow"
                required
            />
            <button type="submit" className="ml-2 bg-blue-500 text-white rounded p-2">
                Submit
            </button>
        </form>
    );
};

export default InputField;