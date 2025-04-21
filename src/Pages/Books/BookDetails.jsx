import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { Wish } from '../../utility/Wish';
import { ToastContainer, toast } from 'react-toastify';
const BookDetails = () => {
  const { id } = useParams()
  const dataOfBooks = useLoaderData()
  const match = dataOfBooks.find(data => data.bookId === parseInt(id))
  const { bookName, review, image, category, author, totalPages, rating, tags, publisher, yearOfPublishing } = match
  const handleList = (id) => {
    const active = Wish(id)
    if (active === "already") {
      toast.error("🚫 This item is already in your wishlist!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light"
      });
    } else if (active === "completed") {
      toast.success('😊✅ as your wish😎', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light"
      })
    }
    Wish(id)
  }
  return (
    <>
      <div className='lg:grid  lg:grid-cols-2 gap-2  lg:gap-10'>
        <div className='h-auto  p-3 bg-gray-100 rounded-xl flex justify-center'>
          <img className='h-full  rounded-xl ' src={image} alt="" />
        </div>
        <div className='content-start'>
          <div className='py-1 border-b border-gray-300 '>
            <h1 className='text-3xl mb-1'>{bookName}</h1>
            <h2 className='font-semibold'>by : {author}</h2>
          </div>
          <div className='text-sm py-3 border-b border-gray-300 mb-1 '>
            {category}
          </div>
          <div className='my-4'>
            <ToastContainer />

            <p>
              <span className='font-bold '>Review: </span>
              {review}
            </p>
          </div>
          <div className='mb-2 border-b border-gray-300 pb-4'>
            <p className='font-bold mr-1 inline-block'>Tag </p>{
              tags.map((t, i) => <p className='text-[#3db824] bg-gray-200 py-0 font-bold px-2 rounded-lg inline-block mr-2' key={i}># {t}</p>)
            }
          </div>
          <div>
            <table className='mt-4'>
              <tbody className='text-lg'>
                <tr >
                  <td className='text-gray-700 pr-6'>Number of Pages: </td>
                  <td className='font-bold'>{totalPages}</td>
                </tr>
                <tr >
                  <td className='text-gray-700 pr-6'>Publisher: </td>
                  <td className='font-bold'>{publisher}</td>
                </tr>
                <tr >
                  <td className='text-gray-700 pr-6'>Year of Publishing: </td>
                  <td className='font-bold'>{yearOfPublishing}</td>
                </tr>
                <tr >
                  <td className='text-gray-700 pr-6'>Rating: </td>
                  <td className='font-bold'>{rating}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className=' flex gap-2 mt-4'>
            <button className='btn btn-outline border-gray-500'>
              Read
            </button>
            <button onClick={() => handleList(id)} className='btn btn-accent'>add to Wishlist</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetails;