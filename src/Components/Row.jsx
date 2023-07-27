import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import {MdChevronLeft,MdChevronRight} from "react-icons/md";

import Movie from './Movie';


const Row = ({title,fetchURL ,rowID}) => {
  
        // let response = () => {
        //   return new Promise(function(resolve, reject) {
        //     fetch(fetchURL).then(response => {
        //         setMovie(response.data.results)
        //       resolve(response);
        //     });
        //   });
        // };
   
    useEffect(()=>{
        axios.get(fetchURL).then((response)=>{
            setMovie(response.data.results);
        })
        // const data =await response();
        // console.log(data)
    },[fetchURL] )

    const [movie,setMovie]=useState([]);
   
function slideleft(){
    var slider=document.getElementById("slider" +rowID)
    slider.scrollLeft =slider.scrollLeft-500;
}
function slideright(){
    var slider=document.getElementById("slider" +rowID)
    slider.scrollLeft =slider.scrollLeft+500;
}
  return (
    <div>
        <h2 className='text-gray-200 text-xs sm:text-xl font-bold md:text-2xl p-4' >{title}</h2>
        <div className='relative flex items-center group'>
            <MdChevronLeft onClick={slideleft} className='bg-white rounded-full absolute left-0 opacity-50 hover:opacity-100 cursor-pointer  z-10 hidden group-hover:block' size={40}/>
            <div id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                {movie.map((item,id)=>(
                        <Movie item={item} key={id}/>
                ))}
            </div>
            <MdChevronRight onClick={slideright}className='bg-white rounded-full absolute right-5 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/> 
        </div>
    </div>
  )
}

export default Row