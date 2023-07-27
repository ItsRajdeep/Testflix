import React, { useState, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { updateDoc, doc, getDoc, onSnapshot } from 'firebase/firestore';



const Savedshows = () => {

    const [movie, setMovie] = useState([]);
    const { user } = UserAuth();
    function slideleft() {
        var slider = document.getElementById("slider")
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    function slideright() {
        var slider = document.getElementById("slider")
        slider.scrollLeft = slider.scrollLeft + 500;
    }
    useEffect(() => {
        getData();
    }, [user?.email])
    const getData = async () => {

        try {
            // console.log(user.email);
            const docRef = await doc(db, "users", user.email);
            const data = await getDoc(docRef);
            // console.log(data.data().savedShows);
            setMovie(data.data().savedShows)
            console.log(movie.length)
        } catch (error) {
            console.log(error)

        }

    }
    const movieRef = doc(db, 'users', `${user?.email}`);
    const deleteShow = async (passedID) => {
        try {
            const result = movie.filter((item) => item.id !== passedID);
            await updateDoc(movieRef, {
                savedShows: result,
            })
            setMovie(result);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <h2 className='text-gray-200 text-xs sm:text-xl font-bold md:text-2xl p-4' >My Movies</h2>
            <div className='relative flex items-center group'>
                <MdChevronLeft onClick={slideleft} className='bg-white rounded-full absolute left-0 opacity-50 hover:opacity-100 cursor-pointer  z-10 hidden group-hover:block' size={40} />
                <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {movie? (
                    movie.map((item, id) => (
                        <div key={id} className='group w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                            <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/original/${item?.img}`} alt={item?.title} />
                            <div className='absolute top-0 left-0 w-full h-full  opacity-0 hover:bg-black/80  hover:opacity-100 text-gray-200'>
                                <p className='white-space-normal text-xs md:text-sm m-6 font-bold flex justify-center h-full  text-end '>{item?.title}
                                    <span onClick={() => deleteShow(item.id)} className='absolute text-gray-200 top-2 right-4 hover:text-red-500'>X</span>
                                </p>

                            </div>
                        </div>
                    ))
                    ) : (<h1 className='text-gray-500 ml-4'>No movies added</h1>)
                    }

                </div>
                <MdChevronRight onClick={slideright} className='bg-white rounded-full absolute right-5 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} />
            </div>
        </>
    )
}

export default Savedshows;