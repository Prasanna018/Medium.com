import React from "react";
import NavBar from "./NavBar";
import { useAuth } from "../Context/AuthProvider";
import { ImGrin } from "react-icons/im";
import { Link } from "react-router-dom";
// import avatar from "../images/image-rita.png";

function ProfileCard(props) {
    const [authUser, setAuthUser] = useAuth();
    return (
        <div className="h-[100vh] ">
            <div>
                <NavBar>

                </NavBar>
            </div>
            <div className="h-[80%] m-auto w-1/2 p-4 border flex flex-col justify-center items-center border-black">
                <div className="text-center h-[50%] w-[40%] bg-blue-300 flex-col shadow-lg p-5  border flex justify-center items-center font-semibold  ">
                    <div>
                        <ImGrin className="text-4xl" />

                    </div>
                    <div className="flex justify-around items-center">
                        <div className="p-2 m-2 bg-violet-600 rounded-md">
                            <span>{authUser.username}</span>
                        </div>
                        <div className="p-2 m-2 rounded-md  bg-blue-500 ">
                            <span>{authUser.email}</span>
                        </div>
                    </div>
                    <div className="m-3 p-2 bg-green-600 cursor-pointer rounded-md ">
                        <Link to={'/view-posts'}>View Posts</Link>
                    </div>

                </div>




            </div>


        </div>
    )
}

export default ProfileCard;