import React from 'react'
import { Link } from 'react-router-dom'
export default function Dashboard() {

    return (
        <div className='h-screen w-screen flex bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] justify-center items-center font-montserrat gap-10 flex-wrap'>
            <Link to='/addCard'>
                <div className='bg-gradient-to-r from-[#cb2d3e] to-[#ef473a] shadow-lg p-2 text-white font-bold h-40 w-40 flex justify-center items-center text-2xl  shadow-blue-800 rounded-md transition-all'>
                    Add Card
                </div>
            </Link>

            <Link to='/showCards'>
                <div className='bg-gradient-to-r from-[#cb2d3e] to-[#ef473a] shadow-lg p-2 text-white font-bold h-40 w-40 flex justify-center items-center text-2xl  shadow-blue-800 rounded-md transition-all'>
                    Edit Cards
                </div>
            </Link>

        </div>
    )
}
