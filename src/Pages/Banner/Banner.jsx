import React from 'react';
import BookImg from '../../assets/books.jpg'
import { Link } from 'react-router';

const Banner = () => {
  return (
    <div className='lg:flex flex-col-reverse lg:flex-row flex justify-between bg-[#13131310]  rounded-3xl p-2 lg:p-12'>
      <div className='lg:w-1/2 flex flex-col justify-center gap-3 items-start'>
        <h1 className='text-4xl font-bold'>Books to freshen up your bookshelf</h1>
        <Link to={"/readlist"}>
          <button className='btn btn-success lg:mb-0 mb-3 text-white' >View your wish  List </button>
        </Link>
      </div>
      <div className='lg:flex lg:w-1/2 justify-end'>
        <img className='lg:w-3/4 w-full rounded-2xl h-full' src={BookImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;