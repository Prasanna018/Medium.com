import React from 'react'
import NavBar from '../Components/NavBar'
import Main from '../Components/Main'
import Post from '../Components/Post'

function Hero() {
    return (
        <div className='bg h-[100vh] text-white w-[100vw]'>
            <NavBar></NavBar>
            <hr className='bg-black text-black font-bold'></hr>
            <Main></Main>
            <hr className='bg-black text-black font-bold'></hr>

        </div>
    )
}

export default Hero
