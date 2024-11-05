import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

function App() {
    const [url, setUrl] = useState('');
    const dispatch = useDispatch();
    const classification = useSelector((state) => state.classification);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:5000/classify', { url });
            dispatch({ type: 'SET_CLASSIFICATION', payload: response.data });
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter website URL"
                />
                <button type="submit">Classify</button>
            </form>
            {classification && <div>Classification: {JSON.stringify(classification)}</div>}
        </div>
    );
}

export default App;
