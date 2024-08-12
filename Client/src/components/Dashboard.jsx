import React from 'react'
import { Link } from 'react-router-dom'
export default function Dashboard() {

    return (
        <div className='h-screen w-screen flex bg-slate-500 justify-center items-center font-montserrat gap-5 flex-wrap'>
            <Link to='/addCard'>
                <div className='bg-slate-600 shadow-lg p-2 text-white font-bold h-40 w-40 flex justify-center items-center text-2xl hover:bg-slate-900 shadow-slate-700 rounded-md transition-all'>
                    Add Card
                </div>
            </Link>

            <Link to='/showCards'>
                <div className='bg-slate-600 shadow-lg p-2 text-white font-bold h-40 w-40 flex justify-center items-center text-2xl hover:bg-slate-900 shadow-slate-700 rounded-md transition-all'>
                    Edit Cards
                </div>
            </Link>

        </div>
    )
}
