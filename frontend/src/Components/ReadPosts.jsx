import React from 'react'
import NavBar from './NavBar'
import User_Posts from './User_Posts'
import Post from './Post';
import GetPosts from '../Context/GetPosts';

function ReadPosts() {
    const [posts] = GetPosts();
    // console.log(typeof (posts))


    return (
        <div className='text-white h-[100vh]'>
            <NavBar></NavBar>

            <hr>
            </hr>

            <div className='h-[80vh] m-4 overflow-y-auto '>
                {posts.map((postdata, idx) => {
                    return <User_Posts key={idx} postdata={postdata} ></User_Posts>
                })}



            </div>

        </div>
    )
}

export default ReadPosts
