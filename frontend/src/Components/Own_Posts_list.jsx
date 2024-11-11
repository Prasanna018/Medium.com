import React from 'react'
import axios from 'axios';
function Own_Posts_list({ owndata }) {

    const handleDelete = async () => {
        const paramId = (owndata._id);
        axios.delete(`/api1/api/post/delete-post/${paramId}`).then((response) => {
            console.log(response.data);
            if (response.data) {
                window.location.reload(true);
                alert(response.data.message)
            }
        }).catch((error) => {
            console.log(error.response);
            alert(error.response.data.message)
        })
    }

    return (

        <div className=' cursor-pointer w-[50vw] h-fit border mx-auto my-4 text-black flex justify-center items-center flex-col  p-4' >
            <div className='font-bold bg-slate-400'>
                {owndata.title}

            </div>

            <div className='font-normal '>
                {owndata.description}

            </div>
            <div className='flex w-full justify-between items-center '>
                <div>
                    <button className='bg-red-600 p-1 text-center text-white rounded-md hover:bg-red-700 duration-200 ' onClick={handleDelete}>Delete</button>
                </div>

            </div>


        </div >
    )
}

export default Own_Posts_list
