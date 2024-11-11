import React from 'react'
import NavBar from './NavBar'
import GetUserPosts from '../Context/GetUserPosts'
import Own_Posts_list from './Own_Posts_list';

function Own_Posts() {
    const [userPost] = GetUserPosts();

    return (
        <div className='h-[100vh}'>
            <NavBar></NavBar>

            <div className='h-[80%] overflow-y-auto'>
                {/* <Own_Posts_list></Own_Posts_list>
                 */}
                {userPost.map((owndata, idx) => {
                    return <Own_Posts_list key={idx} owndata={owndata}></Own_Posts_list>

                })}


            </div>


        </div>
    )
}

export default Own_Posts
