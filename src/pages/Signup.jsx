import {React, useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';
import {UserAuth} from "../context/AuthContext";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const {user,signUp}=UserAuth();
    const navigate= useNavigate();
     
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            // console.log(signUp);
        await signUp(email,password);
        navigate("/");
        }
        catch(error){
            console.log(error);
        }
    }
  return (
    <>
        <div className='w-full h-screen'>
            <img className='hidden sm:block absolute w-full h-full object-cover opacity-50' src="https://assets.nflxext.com/ffe/siteui/vlv3/d7af077c-af5a-4055-8f9a-740a43588583/95bae10c-9773-4447-af4e-612a244231bd/IN-en-20230717-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="This is a image" />
            <div className='fixed w-full px-4 py-24 z-50'>
                <div className='max-w-[450px] h-[600px] mx-auto bg-black/70  text-white'>
                    <div className="max-w-[320px] mx-auto py-16">
                        <h1 className='text-3xl font-bold'>Sign <span className='text-red-600 font-bold'>Up</span></h1>
                        <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'> 
                            <input onChange={(e)=>
                                setEmail(e.target.value)}
                                className='p-3 my-3 bg-gray-600  rounded ' type="email" placeholder='Email' required/>
                            <input onChange={(e)=>setPass(e.target.value)} className='p-3 my-5 bg-gray-600  rounded ' type="password" placeholder='Password' required autoComplete='current-password' />
                            <button className='bg-red-600 p-3 rounded cursor-pointer hover hover:bg-red-700'>Sign UP</button>
                            <div className='my-5 flex justify-between items-center text-sm text-gray-500 font-bold'>
                                <p><input className='mr-2' type="checkbox" />Remember me</p>
                                <p>Need Help?</p>
                            </div>
                            <p className='my-6 text-gray-500 '>Already subscribe to TestFlix? 
                            <span className='text-white cursor-pointer hover:text-red-600'>
                               <Link to="/login">Log In</Link> 
                            </span> 
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Signup