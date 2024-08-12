import React from 'react'
import { useState, useEffect } from 'react'
import cardService from '../Services/FlashcardService';
import toast from 'react-hot-toast';
import "../css/card.css"
import { InfinitySpin } from "react-loader-spinner"
import ReactCardFlip from 'react-card-flip';
import FlashCard from './FlashCard';


export default function Home() {

  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false)
  const [flipped, setFlipped] = useState(false)
  const [index, setIndex] = useState(null);

  useEffect(() => {
    if (cards.length) setIndex(0);
  }, [cards])


  useEffect(() => {

    async function getAllCards() {
      try {
        setLoading(true)
        let response = await cardService.getAllCards();
        setLoading(false)
        if (!response.data) {
          const { response: { data: { message } } } = response;
          toast.error(message);
          return;
        }

        const { data: { cards } } = response;
        setCards(cards)
      } catch (error) {
        setLoading(false)
        const { response: { data: { message } } } = error;
        toast.error(message);
        return;
      }
    }

    getAllCards();
  }, [])

  function handleClick(e) {
    setFlipped(prev => !prev);
  }

  return (
    <div className='min-h-screen w-screen flex justify-center items-center font-serif flex-col gap-5 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]'>
      <h1 className='text-white text-3xl font-montserrat'>Admin Email : test@gmail.com</h1>
      <h1 className='text-white text-3xl font-montserrat'>Admin Password : 12345</h1>
      <h1 className='text-white text-5xl font-montserrat'>Welcome To FlashCards</h1>

      {loading ? <InfinitySpin
        visible={true}
        width="200"
        color="#37B7C3"
        ariaLabel="infinity-spin-loading"
      /> : <main className='flex justify-center items-center gap-5 flex-wrap flex-col'>
        {index !== null && <FlashCard question={cards[index].question} answer={cards[index].answer} handleClick={handleClick} />}

        <div className='w-full flex gap-5 justify-around'>
          {index + 1 < cards.length && <button onClick={() => setIndex(index + 1)} className='my-2 text-white  py-3 px-3 bg-slate-900 text-xl font-bold rounded-md shadow-md hover:bg-slate-850 '> Next
          </button>}

          {index - 1 >= 0 && <button onClick={() => setIndex(index - 1)} className='my-2 text-white  py-3 px-3 bg-slate-900 text-xl font-bold rounded-md shadow-md hover:bg-slate-850 '> Prev
          </button>}

        </div>

      </main>}
    </div>
  )
}
