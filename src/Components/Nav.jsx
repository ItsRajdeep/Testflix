import React from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
const Nav = () => {
  const{user,logOut}=UserAuth();
 
  const navigate = useNavigate()
  const handleLogout= async()=>{
    try{
      await logOut();
      navigate("/");

    }catch(error){
      console.log(error);
    }
  }
  return (
    <div className='flex items-center justify-between p-2 sm:p-4 z-[100] absolute w-full'>
        <Link to="/">
        <h1 className='text-red-600 text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-bold cursor-pointer' >TESTFLIX</h1>
        </Link>
        {/* <div className='flex items-center'>
          <Link to="/login">
        <button className='text-white pl-2 pr-1 sm:pr-4 text-xs md:text-4xs sm:text-xs lg:text-xl font-bold cursor-pointer'>Log In</button>
          </Link>
          <Link to="/signup">
        <button className='bg-red-700 px-2 py-1 sm:px-5 sm:py-1 text-xs sm:text-xs md:text-4xs lg:text-xl rounded cursor-pointer text-white font-bold'>Sign Up</button>
          </Link>
          
        </div> */}
        {user?.email?(<div className='flex items-center'>
        <Link to="/account">
        <button className='text-white pl-2 pr-1 sm:pr-4 text-xs md:text-4xs sm:text-xs lg:text-xl font-bold cursor-pointer'>Account</button>
          </Link>
         
        <button 
        onClick={handleLogout}
        className='bg-red-700 px-2 py-1 sm:px-5 sm:py-1 text-xs sm:text-xs md:text-4xs lg:text-xl rounded cursor-pointer text-white font-bold'>Log Out</button>
          
          
        </div>):(
          <div className='flex items-center'>
          <Link to="/login">
        <button className='text-white pl-2 pr-1 sm:pr-4 text-xs md:text-4xs sm:text-xs lg:text-xl font-bold cursor-pointer'>Log In</button>
          </Link>
          <Link to="/signup">
        <button className='bg-red-700 px-2 py-1 sm:px-5 sm:py-1 text-xs sm:text-xs md:text-4xs lg:text-xl rounded cursor-pointer text-white font-bold'>Sign Up</button>
          </Link>
          
        </div>
        )}

    </div>
  )
}

export default Nav;