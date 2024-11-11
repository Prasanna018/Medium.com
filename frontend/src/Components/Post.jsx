import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

import axios from 'axios'
function Post() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleClick = async (e) => {
        // e.preventDefalut();
        await axios.post("/api1/api/post/send-post", { title, description }).then((response) => {
            console.log(response.data);
            if (response.data) {
                alert(response.data.message)
            }



        }).catch((error) => {
            console.log(error.response)
            alert(error.response.data.message)
        })




    }



    return (
        <div className='text-white h-[100vh]'>

            <NavBar></NavBar>
            <hr></hr>
            <div className="backdrop-blur-sm bg-[url('./src/assests/andrew-neel-cckf4TsHAuw-unsplash.jpg')]  h-[80vh] flex justify-evenly items-center space-x-8  ">
                <div className='text-5xl text-center text-black font-semibold'>
                    Write your insights and <br></br>post it.
                </div>
                <div className='space-y-5'>
                    <div className='text-black'>
                        <label className='text-black font-bold' >Title</label>
                        <br></br>
                        <input type='text' className='h-16 w-96' id='title' value={title} onChange={(e) => {
                            setTitle(e.target.value);
                        }}></input>



                    </div >
                    <div className='text-black'>
                        <label className='text-black font-bold' >Description</label>
                        <br></br>
                        <textarea type='text' id='des' className=' h-[40vh] w-96 resize-none'

                            onChange={(e) => {
                                setDescription(e.target.value);
                            }}

                        ></textarea>

                    </div>
                    <button className='text-white p-3 m-2 bg-indigo-950 font-bold rounded-lg hover:bg-indigo-800 duration-300 ' onClick={handleClick}>Submit</button>

                </div >



            </div >

            <hr></hr>

        </div >
    )
}

export default Post
