import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip';
import "../css/card.css"
export default function FlashCard({ question, answer, handleClick }) {
    const [flipped, setFlipped] = useState(false)
    function handleClick(e) {
        setFlipped(prev => !prev);
    }
    return <ReactCardFlip isFlipped={flipped} flipDirection="vertical">
        <div className="h-auto w-[25rem] bg-gradient-to-r from-[#cb2d3e] to-[#ef473a] rounded-sm p-5 shadow-lg m-2 font-montserrat shadow-blue-950 flex justify-center items-center flex-col gap-5">
            <p className='text-white text-2xl my-2 text-center font-bold'>{question} </p>
            <button onClick={handleClick} className='my-2 text-white py-1 px-3 bg-green-900 text-xl font-bold rounded-md shadow-red-800 shadow-xl'> Reveal
            </button>
        </div>

        <div className="h-auto w-[25rem] bg-[#4b6cb7] rounded-sm p-5 shadow-lg m-2 font-montserrat shadow-blue-950 flex justify-center items-center flex-col gap-5">
            <p className='text-white text-2xl my-2 text-center font-bold'>{answer} </p>
            <button onClick={handleClick} className='my-2 text-white py-1 px-3 text-xl font-bold rounded-md bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] shadow-xl'> Hide Answer
            </button>
        </div>
    </ReactCardFlip>
}
