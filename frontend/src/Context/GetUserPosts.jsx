import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'
function GetUserPosts() {

    const [userPost, setUserPost] = useState([])
    useEffect(() => {
        const GetUserPosts = async () => {

            try {
                const token = Cookies.get("jwt");
                const response = await axios.get("/api1/api/post/get-posts", {
                    withCredentials: true,
                    headers: {
                        Authorization: token
                    }

                })
                setUserPost(response.data.posts);

            } catch (error) {
                console.log(error);
            }

        }
        GetUserPosts();
    }, [])



    return [userPost];


}

export default GetUserPosts
