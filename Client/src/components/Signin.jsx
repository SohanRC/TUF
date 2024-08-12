import React from 'react'
import { useState } from 'react'
import authService from '../Services/AuthService';
import toast from 'react-hot-toast';
import { useSelector, useDispatch } from "react-redux"
import { login, logout } from '../store/AdminSlice';
import { useNavigate } from 'react-router-dom';



export default function Signin() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function submitHandler(e) {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      toast.error("Enter Email & Password To Login !");
      return;
    }
    try {
      setLoading(true)
      let response = await authService.login(formData);
      setLoading(false)
      if (!response.data) {
        const { response: { data: { message } } } = response;
        toast.error(message);
        dispatch(logout());
        return;
      }

      const { data: { message, result } } = response;
      dispatch(login());
      toast.success(message);
      navigate('/dashboard');
      return;
    } catch (error) {
      setLoading(false)
      dispatch(logout());
      const { response: { data: { message } } } = error;
      toast.error(message);
      return;
    }
  }
  return (
    <div className='h-screen w-screen flex bg-slate-500 justify-center items-center font-montserrat'>
      <form action="" className='border-2 border-white p-5 flex flex-col gap-2 bg-slate-700' onSubmit={submitHandler}>
        <h2 className='text-4xl text-white font-bold'>Admin Signin</h2>
        <label htmlFor="email" className='text-md font-bold text-white cursor-pointer'>Email</label>
        <input type="text" name="email" id="email" className='outline-none p-2 text-xl font-bold rounded-md  bg-gray-300 shadow-md cursor-pointer ' onChange={handleChange} />
        <label htmlFor="password" className='text-md font-bold text-white cursor-pointer'>Password</label>
        <input type="password" name="password" id="password" className='outline-none p-2 text-xl font-bold rounded-md  bg-gray-300 shadow-md cursor-pointer ' onChange={handleChange} />
        <button type='submit' className='w-full bg-red-500 p-2 rounded-md text-white font-bold border-2 border-red-950 hover:bg-red-400 transition-all'
          disabled={loading}
        >Log In</button>
      </form>
    </div>
  )
}

