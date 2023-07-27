import React, { useEffect, useState } from 'react'
import request from '../Request';
import axios from 'axios';


const Main = () => {
    useEffect(()=>{
        axios.get(request.requestPopular).then((response)=>{
            setMovie(response.data.results)
            // console.log(response.data)
             
        })
    },[]);
    const [movie,setMovie]=useState([]);
    const movies =movie[Math.floor(Math.random() * movie.length)];
    // console.log(movies);

    const readmorestring=(str,num) => {
      if(str?.length>num){
        return str.slice(0,num) + '...';
        }
        else{
          return str;
        }

    }
    

  return (
    <div className='w-full h-[550px] text-white'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
        <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movies?.backdrop_path}`} alt={movies?.title} />
        <div className='absolute w-full top-[25%] lg:top-[30%] p-3 md:p-8 '>
          <h1 className='text-2xl sm:4xl md:text-5xl font-bold mb-2'>{movies?.title}</h1>
        <div>
          <button className='border text-xs bg-gray-300 text-black rounded-xl border-black py-2 px-5 hover:bg-black hover:border-red-700 hover:text-white'>Play</button>
          <button className='border text-xs text-white border-gray-300 rounded-xl py-2 px-5 ml-2  hover:border-red-700 '>Wathch Later</button>
        </div>
          <p className='text-gray-400 mt-2 text-sm'>Released: {movies?.release_date}</p>
          <p className='text-xs w-full md:max-w-[70%] lg:max-w[50%] xl
          :max-w-[35%] text-gray-200'>
            {readmorestring(movies?.overview,150)}
            </p>

        </div>
      </div>
      
    </div>
  )
}

export default Main