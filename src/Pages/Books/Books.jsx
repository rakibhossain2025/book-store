import { Suspense } from "react";
import Book from "./Book";

const Books = ({ api }) => {
  return (
    <div >
      <h1 className="text-center text-4xl my-4 font-bold">All Books</h1>
      <Suspense fallback={<span className="loading loading-dots loading-xl text-green-500"></span>}>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 gap-3">
          {api.map(book => <Book key={book.bookId} book={book}></Book>)}

        </div>
      </Suspense>
   
    </div >
  );
};

export default Books;
