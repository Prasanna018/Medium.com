import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import axios from 'axios';
function GetPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const GetallPosts = async () => {
            try {
                const token = Cookies.get("jwt");
                const response = await axios.get("/api1/api/post/get-all-posts", {
                    withCredentials: true,
                    headers: {
                        Authorization: token
                    }
                })
                setPosts(response.data.posts);

            } catch (error) {
                console.log(error);

            }

        }
        GetallPosts();


    }, [])

    return [posts];


}

export default GetPosts
