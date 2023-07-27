import React from 'react'
import Savedshows from '../Components/Savedshows'
import { UserAuth } from '../context/AuthContext';

const Account = () => {
  const {user}=UserAuth();

  return (
    <>
      <div className='w-full text-white'>
        <img className=' w-full h-[400px] object-cover opacity-40' src="https://assets.nflxext.com/ffe/siteui/vlv3/d7af077c-af5a-4055-8f9a-740a43588583/95bae10c-9773-4447-af4e-612a244231bd/IN-en-20230717-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="This is account page" />
        <div className="absolute top-[20%] p-4 md:p-8 ">
          <h1 className='text-4xl md:text:5xl fon-bold'>{user.email}</h1>
        </div>
      </div>
      <Savedshows />
    </>
  )
}

export default Account