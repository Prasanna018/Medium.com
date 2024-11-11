import React, { useContext, useState } from 'react'
import GetPosts from '../Context/GetPosts';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { useStore } from 'zustand';


function User_Posts({ postdata }) {

    // const { sharedState, setSharedState } = useStore();



    return (
        <div className=' cursor-pointer w-[50vw] h-fit border mx-auto my-4 text-black flex justify-center items-center flex-col  p-4' >
            <div className='font-bold bg-slate-400'>
                {postdata.title}

            </div>

            <div className='font-normal '>
                {postdata.description}

            </div>



        </div >
    )
}

export default User_Posts;
