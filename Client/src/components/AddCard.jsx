import React from 'react'
import { useState } from 'react'
import authService from '../Services/AuthService';
import toast from 'react-hot-toast';
import { useSelector, useDispatch } from "react-redux"
import { login, logout } from '../store/AdminSlice';
import { useNavigate } from 'react-router-dom';
import cardService from '../Services/FlashcardService';



export default function AddCard() {

  const [formData, setFormData] = useState({
    question: "",
    answer: "",
  })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

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
      let response = await cardService.addCard(formData);
      setLoading(false)
      if (!response.data) {
        const { response: { data: { message } } } = response;
        toast.error(message);
        return;
      }

      const { data: { message } } = response;
      toast.success(message);
      navigate('/');
      return;
    } catch (error) {
      setLoading(false)
      const { response: { data: { message } } } = error;
      toast.error(message);
      return;
    }
  }
  return (
    <div className='h-screen w-screen flex bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] justify-center items-center font-montserrat'>
      <form action="" className='border-2 border-white p-5 flex flex-col gap-2 bg-slate-700' onSubmit={submitHandler}>
        <h2 className='text-4xl text-white font-bold'>Add Card</h2>
        <label htmlFor="question" className='text-md font-bold text-white cursor-pointer'>Question</label>
        <input type="text" name="question" id="question" className='outline-none p-2 text-xl font-bold rounded-md  bg-gray-300 shadow-md cursor-pointer ' onChange={handleChange} />
        <label htmlFor="answer" className='text-md font-bold text-white cursor-pointer'>Answer</label>
        <input type="text" name="answer" id="answer" className='outline-none p-2 text-xl font-bold rounded-md  bg-gray-300 shadow-md cursor-pointer ' onChange={handleChange} />
        <button type='submit' className='w-full bg-red-500 p-2 rounded-md text-white font-bold border-2 border-red-950 hover:bg-red-400 transition-all'
          disabled={loading}
        >Add Card</button>
      </form>
    </div>
  )
}

