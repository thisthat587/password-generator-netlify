import React, { useState } from 'react';
import './App.css'


function App() {
    const [Password, setPassword] = useState('');
    const [length, setLength] = useState(8);
    const [lowerCase, setLowerCase] = useState(true);
    const [upperCase, setUpperCase] = useState(false);
    const [numbers, setNumbers] = useState(false);
    const [symbols, setSymbols] = useState(false);

    const getPassword = async () => {
        try {
            const response = await fetch(`/api/passwordApi?length=${length}&lowercase=${lowerCase}&uppercase=${upperCase}&numbers=${numbers}&symbols=${symbols}`);
            const data = await response.json();
            setPassword(data.message);
            
        } catch (error) {
            // Handle any errors
            console.error('Error:', error);
            setPassword('An error occurred. Please try again later.');
        }
    };

    return (
        <div >
            <div >
                <div className='p-4 flex justify-left rounded-full shadow-lg  bg-cyan-500 shadow-red-400 border items-center'>
                    <label
                        className='font-bold text-xl'
                        htmlFor="lower-case"
                    >Lowercase Characters</label>
                    <input
                        type='checkbox'
                        className='h-6 w-6 ml-20'
                        id='lower-case'
                        checked={lowerCase}
                        onChange={(e) => {
                            setLowerCase(e.target.checked)
                        }}
                    />
                </div>
                <div className='p-4 flex justify-left rounded-full shadow-lg bg-cyan-500 shadow-red-400 border items-center'>
                    <label
                        className='font-bold text-xl'
                        htmlFor="upper-case"
                    >Uppercase Characters</label>
                    <input
                        type="checkbox"
                        className=' h-6 w-6 ml-20 '
                        id='upper-case'
                        checked={upperCase}
                        onChange={(e) => {
                            setUpperCase(e.target.checked)
                        }}
                    />
                </div>
                <div className='p-4 flex justify-left rounded-full shadow-lg bg-cyan-500 shadow-red-400 border items-center'>
                    <label
                        className='font-bold text-xl mr-1'
                        htmlFor="numbers"
                    >Numbers</label>
                    <input
                        type="checkbox"
                        className='h-6 w-6 ml-48'
                        id='numbers'
                        checked={numbers}
                        onChange={(e) => {
                            setNumbers(e.target.checked)
                        }}
                    />
                </div>
                <div className='p-4 flex justify-left rounded-full shadow-lg bg-cyan-500 shadow-red-400 border items-center'>
                    <label
                        className='font-bold text-xl mr-7'
                        htmlFor="symbols"
                    >Symbols</label>
                    <input
                        type="checkbox"
                        className='h-6 w-6  ml-44 '
                        id='symbols'
                        checked={symbols}
                        onChange={(e) => {
                            setSymbols(e.target.checked)
                        }}
                    />
                </div>
                <div className='p-4 flex rounded-full shadow-lg shadow-red-400 bg-cyan-500 border  justify-center items-center'>
                    <label
                        className='font-bold text-xl'
                        htmlFor="length"
                    >Length</label>
                    <input
                        type="range"
                        className='h-6 w-48 ml-20'
                        max={80}
                        min={8}
                        id='length'
                        value={length}
                        onChange={(e) => {
                            setLength(e.target.value)
                        }}
                    />
                    <p className="ml-8 bg-white p-2 font-extrabold text-black rounded-full shadow-black shadow-lg">{length}</p>

                </div>
            </div>
            <div className='mt-8'>
                <button
                    className=' shadow-md shadow-orange-300 bg-cyan-300 rounded-full text-black font-bold'
                    onClick={getPassword}
                >Generate Password</button>
            </div>
            <div
                className='mt-4'
            >
                <input
                    type="text"
                    className='bg-pink-200 text-black font-semibold rounded-xl text-xl p-4'
                    value={Password}
                    onChange={(e) => [
                        setPassword(e.target.value)
                    ]}
                    placeholder='PASSWORD'
                />
            </div>
        </div>
    )





    // return (
    //     <div>
    //         <div className='len-container'>
    //             <p>Length</p>
    //             <p>:</p>
    //             <input
    //                 type="text"
    //                 value={length}
    //                 onChange={(e) => setLength(e.target.value)}
    //             />
    //         <button onClick={handleClick}>Generate Password</button>
    //         </div>
    //         <div className='pass-container'>
    //             <p>PASSWORD </p>
    //             <p>:</p>
    //             <input
    //                 type="text"
    //                 value={message}
    //                 readOnly
    //             />
    //             {/* {message.map((each, index) => (
    //                 <p key={index}>name {index}: {each.name}</p>
    //             ))} */}
    //             {/* <p>{message}</p> */}
    //         </div>
    //     </div>
    // );

}

export default App;
