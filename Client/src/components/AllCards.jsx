import React from 'react'
import { useState, useEffect } from 'react'
import cardService from '../Services/FlashcardService';
import toast from 'react-hot-toast';
import "../css/card.css"
import { InfinitySpin } from "react-loader-spinner"
import ReactCardFlip from 'react-card-flip';
import FlashCard from './FlashCard';
import { Link, useNavigate } from 'react-router-dom';


export default function AllCards() {

  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

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

  async function handleDelete(id) {
    try {
      setLoading(true)
      let response = await cardService.deleteCard(id);
      setLoading(false)
      if (!response.data) {
        const { response: { data: { message } } } = response;
        toast.error(message);
        return;
      }

      const { data: { message } } = response;
      toast.success(message);
      setCards((prev) => prev.filter((card) => card.id !== id))
      navigate('/showCards');
      return;
    } catch (error) {
      setLoading(false)
      toast.error(error.message);
      return;
    }
  }

  return (
    <div className='min-h-screen w-screen bg-slate-500 flex justify-center items-center font-serif flex-col gap-5'>
      <h1 className='text-white text-5xl font-montserrat'>Edit FlashCards</h1>

      {loading ? <InfinitySpin
        visible={true}
        width="200"
        color="#37B7C3"
        ariaLabel="infinity-spin-loading"
      /> : null}

      <main className='flex justify-center items-center gap-5 flex-wrap '>
        {
          cards && cards.map((card) => {
            return <div className='flex flex-col border-2 border-slate-800 rounded-md bg-slate-300' key={card.id}>
              <FlashCard question={card.question} answer={card.answer} handleClick={handleClick} />
              <div className='flex gap-2'>
                <Link to={`/updateCard/${card.id}`}>
                  <button className='my-2 text-white  py-1 px-2 bg-blue-500 ml-3 rounded-md'>Edit</button>
                </Link>

                <button className='my-2 text-white  py-1 px-2 bg-red-500  ml-3 rounded-md' onClick={() => handleDelete(card.id)}>Delete</button>
              </div>
            </div>
          }
          )
        }
      </main>
    </div>
  )
}
