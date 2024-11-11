import React from 'react'
import { Link } from 'react-router-dom'

function Main() {
    return (
        <div className='text-black h-[80vh] w-full flex flex-wrap '>
            <div className='flex justify-center space-y-20 items-center flex-col w-3/4 p-8'>
                <div className='text-black text-7xl font-extrabold text-center'>
                    A universe of unique,<br></br> quirky insights.
                </div>
                <div className='text-3xl font-light'>
                    mixed, rich stories told in every style.

                </div>
                <div>
                    <button className='p-3 bg-indigo-700 text-white rounded-sm hover:bg-indigo-900 duration-300'><Link to={'/read'}>Start Reading</Link></button>
                </div>


            </div>
            <div className='w-1/4 ' >
                <img className='object-cover h-[80vh]' src={'../assests/bg.png'}></img>

            </div>

        </div>
    )
}

export default Main
