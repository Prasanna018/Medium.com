import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { useAuth } from '../Context/AuthProvider';
function LogIn() {
    const [authUser, setAuthUser] = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password
        }
        await axios.post("/api1/api/auth/login", userInfo, { withCredentials: true }).then((response) => {
            console.log(response.data);
            if (response.data) {
                alert(response.data.message);
            }
            localStorage.setItem("medium", JSON.stringify(response.data.user))
            setAuthUser(response.data.user)
        }).catch((error) => {
            if (error.response) {
                alert(error.response.data.message);
            }
        })


    }
    return (
        <div className='h-screen w-screen bg-blue-950 flex justify-center items-center'>
            <form onSubmit={handleSubmit(onSubmit)}
                className='h-[50%] p-4 flex flex-col justify-center items-center '>

                <div className='m-3 text-xl text-white font-bold '>Login</div>

                <div className='m-4 flex flex-col justify-center items-center'>
                    <input className='w-96 h-10 p-2 rounded-sm ' type='email' placeholder='email'
                        {...register("email", { required: true })}></input>
                    {errors.email && <span className='text-red-400'>This field is required</span>}
                </div>
                <div className='m-4 flex flex-col justify-center items-center'>
                    <input className='w-96 h-10 p-2 rounded-sm' type='password' placeholder='password'
                        {...register("password", { required: true })}></input>
                    {errors.password && <span className='text-red-400'>This field is required</span>}
                </div>
                <div className='text-white m-6 flex justify-center items-center gap-x-10 '>
                    <p>Don't have account? <Link className='font-semibold' to={'/signup'}>signup</Link></p>
                    <button className='border border-blue-950 p-2 bg-blue-900 hover:bg-blue-950 duration-200'>Submit</button>
                </div>
            </form>

        </div>
    )
}

export default LogIn
