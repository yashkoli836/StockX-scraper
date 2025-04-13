import React, { useState } from 'react';
import SubmitButton from '../components/SubmitButton';
import LoadingIndicator from '../components/LoadingIndicator';
import ErrorDisplay from '../components/ErrorDisplay';
import { scrapeProductData } from '../utils/api';

interface InputFieldProps {
    value: string;
    onChange: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ value, onChange }) => {
    return (
        <input
            type="text"
            className="border p-2 w-full"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    );
};

interface ErrorDisplayProps {
    message: string;
}

const LocalErrorDisplay: React.FC<ErrorDisplayProps> = ({ message }) => {
    return (
        <div className="text-red-500 mt-2">
            {message}
        </div>
    );
};

interface ResultsTableProps {
    data: any[];
}

const ResultsTable: React.FC<ResultsTableProps> = ({ data }) => {
    return (
        <table className="table-auto border-collapse border border-gray-400 w-full">
            <thead>
                <tr>
                    <th className="border border-gray-300 px-4 py-2">Column 1</th>
                    <th className="border border-gray-300 px-4 py-2">Column 2</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td className="border border-gray-300 px-4 py-2">{item.column1}</td>
                        <td className="border border-gray-300 px-4 py-2">{item.column2}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

const HomePage: React.FC = () => {
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [results, setResults] = useState<any[]>([]);
    console.log('HomePage component loaded');
    const handleSubmit = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await scrapeProductData(url);
            setResults(data);
        } catch (err) {
            setError('Failed to scrape data. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">StockX Product Scraper</h1>
            <InputField value={url} onChange={setUrl} />
            <SubmitButton onClick={handleSubmit} loading={loading} />
            {loading && <LoadingIndicator />}
            {error && <LocalErrorDisplay message={error} />}
            {results.length > 0 && <ResultsTable data={results} />}
        </div>
    );
};

export default HomePage;