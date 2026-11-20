

"use client";

import { TBook } from "@/app/type/books.type";
import { BooksContext } from "@/context/BooksContext";
import { useContext } from "react";
import { toast } from "react-toastify";

const ReadButton = ({ book }: { book: TBook }) => {

  // Step 11: Access Context Data
  const { readBooks, setReadBooks } = useContext(BooksContext);

  // Step 12: Handle Read Book
  const handleReadBook = () => {
    
    setReadBooks([...readBooks, book]);
     toast.success(`you have add "${book.bookName} to your read books"`);
    // console.log("Rid Button is teger" ,book);
  };

  return (
    <button
      className="btn btn-outline px-8"
      onClick={()=>handleReadBook()}>
      Read
    </button>
  );
};

export default ReadButton;


