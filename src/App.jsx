import React, { useState } from 'react';
import './App.css'
function App() {
    const [message, setMessage] = useState([]);
    const [length, setName] = useState(8);

    const handleClick = async () => {
        try {
            // Make a GET request to the Netlify function endpoint
            const response = await fetch(`/api/passwordApi?length=${length}`);
            console.log(response)
            // Parse the JSON response
            const data = await response.json();
            // Update the message state with the response message
            setMessage(data.message);
            // setName('')

        } catch (error) {
            // Handle any errors
            console.error('Error:', error);
            setMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="App">
            <div className='len-container'>
                <p>Length</p>
                <p>:</p>
                <input
                    type="text"
                    value={length}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <button onClick={handleClick}>Generate Password</button>
            <div className='pass-container'>
                <p>PASSWORD </p>
                <p>:</p>
                <input
                    type="text"
                    value={message}
                    readOnly
                />
                {/* {message.map((each, index) => (
                    <p key={index}>name {index}: {each.name}</p>
                ))} */}
                {/* <p>{message}</p> */}
            </div>
        </div>
    );
}

export default App;
