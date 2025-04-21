import React from 'react';
import { Link } from 'react-router';
import { FaStar } from "react-icons/fa";


const Book = ({ book }) => {
  const { bookName, bookId, author, image, tags, rating } = book
  return (

    <Link to={`details/${bookId}`}>
      <div className='flex hover:shadow-lg select-none hover:bg-[#3f3d3d05] hover:delay-100 hover:transition flex-col gap-2 rounded-2xl border-gray-400 border p-3'>
        <div className='bg-gray-200 h-[250px]  p-4 rounded-2xl flex justify-center'>
          <img src={image} alt="" className='h-full  object-cover' />
        </div>
        <div>
          <div className='flex gap-4 text-green-600'>
            {tags.map((t, i) => <p className='bg-green-100 rounded-2xl py-1 px-3 font-semibold' key={i}>{t}</p>)}
          </div>
          <div className='border-dashed border-b  flex flex-col gap-1 pb-2 border-gray-400'>

            <div>
              <div>
                <h2 className='text-2xl mt-2  h-10  overflow-hidden whitespace-nowrap  overflow-ellipsis  mask-auto'>{bookName} </h2>
              </div>

            </div>
            <p className='text-sm'>by : {author}</p>
          </div>
          <div className='flex justify-between mt-1'>
            <h3>fiction </h3>
            <h3 className='flex items-center gap-1'>{rating} <FaStar className='text-[#fc0000da]' /></h3>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Book;