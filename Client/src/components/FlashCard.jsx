import React, {useState} from 'react'
import ReactCardFlip from 'react-card-flip';
import "../css/card.css"
export default function FlashCard({ question, answer, handleClick }) {
    const [flipped, setFlipped] = useState(false)
    function handleClick(e) {
        setFlipped(prev => !prev);
    }
    return <ReactCardFlip isFlipped={flipped} flipDirection="vertical">
        <div className="h-auto w-[20rem] bg-[#17153B] rounded-sm p-5 shadow-lg m-2 font-montserrat shadow-blue-950">
            <p className='text-white text-2xl my-2 text-center'>{question} </p>
            <button onClick={handleClick} className='my-2 text-white border-2 border-teal-500 py-1 px-3 bg-teal-500 text-xl font-bold'> Reveal
            </button>
        </div>

        <div className="h-auto w-[20rem] bg-[#17153B] rounded-sm p-5 shadow-lg m-2 font-montserrat">
            <p className='text-white text-2xl my-2 text-center'>{answer}</p>
            <button onClick={handleClick} className='my-2 text-white border-2 border-teal-500 py-1 px-3 bg-teal-500 text-xl font-bold'> Click
            </button>
        </div>
    </ReactCardFlip>
}
