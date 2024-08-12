import React, { useEffect } from 'react'
import { useState } from 'react'
import authService from '../Services/AuthService';
import toast from 'react-hot-toast';
import { useSelector, useDispatch } from "react-redux"
import { login, logout } from '../store/AdminSlice';
import { useNavigate, useParams } from 'react-router-dom';
import cardService from '../Services/FlashcardService';



export default function UpdateCard() {

  const { id } = useParams();
  const [card, setCard] = useState({});
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
  })

  useEffect(() => {
    async function getCard() {
      try {
        setLoading(true)
        let response = await cardService.getCard(id);
        setLoading(false)
        if (!response.data) {
          const { response: { data: { message } } } = response;
          toast.error(message);
          return;
        }

        const { data: { card } } = response;
        setCard(() => {
          setFormData((prev) => ({ ...prev, question: card[0].question, answer: card[0].answer }));
          return card[0]
        })
        return;
      } catch (error) {
        setLoading(false)
        const { response: { data: { message } } } = error;
        toast.error(message);
        return;
      }
    }

    getCard();
  }, [])




  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function submitHandler(e) {
    e.preventDefault();
    if (!formData.question || !formData.answer) {
      toast.error("Enter Question & Answer To Add Card !");
      return;
    }
    try {
      setLoading(true)
      let response = await cardService.editCard(formData, id);
      setLoading(false)
      if (!response.data) {
        const { response: { data: { message } } } = response;
        toast.error(message);
        return;
      }

      const { data: { message } } = response;
      toast.success(message);
      navigate('/showCards');
      return;
    } catch (error) {
      setLoading(false)
      const { response: { data: { message } } } = error;
      toast.error(message);
      return;
    }
  }
  return (
    <div className='h-screen w-screen flex bg-slate-500 justify-center items-center font-montserrat'>
      <form action="" className='border-2 border-white p-5 flex flex-col gap-2 bg-slate-700' onSubmit={submitHandler}>
        <h2 className='text-4xl text-white font-bold'>Edit Card</h2>
        <label htmlFor="question" className='text-md font-bold text-white cursor-pointer'>Question</label>
        <input type="text" name="question" id="question" className='outline-none p-2 text-xl font-bold rounded-md  bg-gray-300 shadow-md cursor-pointer ' onChange={handleChange} defaultValue={card?.question} />
        <label htmlFor="answer" className='text-md font-bold text-white cursor-pointer'>Answer</label>
        <input type="text" name="answer" id="answer" className='outline-none p-2 text-xl font-bold rounded-md  bg-gray-300 shadow-md cursor-pointer ' onChange={handleChange} defaultValue={card?.answer} />
        <button type='submit' className='w-full bg-red-500 p-2 rounded-md text-white font-bold border-2 border-red-950 hover:bg-red-400 transition-all'
          disabled={loading}
        >Edit Card</button>
      </form>
    </div>
  )
}

