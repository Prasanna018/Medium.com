import React from 'react'
import { ImBlogger } from "react-icons/im";
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
function NavBar() {
    return (
        <div className='h-[10vh] w-screen navBg flex justify-around items-center flex-wrap   '>
            <div className='flex justify-center items-center'>
                <span className='flex gap-x-4 text-black justify-center items-center'>
                    <div><ImBlogger className='text-4xl text-black' /></div>
                    <div className=' text-4xl font-extrabold italic'>Medium.com </div>

                </span>

            </div>
            <div className='text-black '>
                <ul className='flex justify-center items-center'>
                    <li className='p-2 m-2  hover:underline font-medium '><Link to={'/write'}  >Write</Link ></li>
                    <li className='p-2 m-2 hover:underline font-medium'><Link >Membership</Link></li>
                </ul>

            </div>
            <div className='text-black'>
                <Link to={'/view-profile'}> <CgProfile className='text-4xl cursor-pointer' /></Link>
            </div>

        </div>

    )
}

export default NavBar
