"use client";

import { BooksContext } from "@/context/BooksContext";
import { useContext } from "react";
import BookCard from "../components/BookCard/BookCard";
import { TBook } from "../type/books.type";
import ListedBookCard from "../components/ListBookCard/ListedBookCard";

const ListedBookspage = () => {
  const { readBooks, wishlist } = useContext(BooksContext);

  console.log("reed books ", readBooks);

  return (
    <div>
      <h2 className="text-5xl p-10 m-10 text-center bg-amber-400 rounded-4xl font-bold ">
        Listed Books
      </h2>
      <div className="text-center">
        <select defaultValue="Pick a Runtime" className="select select-success">
          <option disabled={true}>Pick a Runtime</option>
          <option>npm</option>
          <option>Bun</option>
          <option>yarn</option>
        </select>
      </div>
      <div>
        {/* name of each tab group should be unique */}
        <div className="tabs tabs-border">
          <input
            type="radio"
            name="my_tabs_2"
            className="tab"
            aria-label={`Wish List (${wishlist.length})`}
          />
          <div className="tab-content border-base-300 bg-base-100 p-10">
            {wishlist.length > 0 ? (
              wishlist.map((book: TBook) => {
                return <BookCard key={book.bookId} book={book}></BookCard>;
              })
            ) : (
              <p className="text-center text-3xl text-red-400 ">
                No Wish List Book
              </p>
            )}
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            className="tab"
            aria-label={`Read List (${readBooks.length})`}
            defaultChecked
          />
          <div className="tab-content border-base-300 bg-base-100 p-10">
            {readBooks.length > 0 ? (
              readBooks.map((book: TBook) => {
                return <BookCard key={book.bookId} book={book}></BookCard>;
              })
            ) : (
              <p className="text-center text-3xl text-red-400 ">
                No reed books
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBookspage;
