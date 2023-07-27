import React from 'react';
import { useState } from 'react';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from "firebase/firestore"

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  const { user } = UserAuth();
  const [saved, setSaved] = useState(false);
  const movieID = doc(db, 'users', `${user?.email}`)

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like)
      setSaved(true)
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path
        })
      })
    }
    else {
      alert("please login first")
    }
  }
  return (
    <div className='group w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
      <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`} alt={item?.title} />
      <div className='absolute top-0 left-0 w-full h-full  hover:bg-black/80  opacity-0 hover:opacity-100 text-gray-200'>
        <p className='white-space-normal text-xs md:text-sm m-5 font-bold flex justify-center h-full  text-end '>{item?.title}</p>
        <p onClick={saveShow}>
          {like ? <FaHeart className='absolute top-0 m-2 text-gray-200' /> : <FaRegHeart className='absolute mx-2 top-2 text-gray-200' />}
        </p>
      </div>
    </div>
  )
}

export default Movie