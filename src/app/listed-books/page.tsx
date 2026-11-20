
"use client";

import { BooksContext } from "@/context/BooksContext";
import { useContext, useState } from "react";
import BookCard from "../components/BookCard/BookCard";
import { TBook } from "../type/books.type";

const ListedBookspage = () => {
  // Step 1: Context থেকে Read Books এবং Wishlist ডাটা নিয়ে আসি
  const { readBooks, wishlist } = useContext(BooksContext);

  // Step 2: Sorting করার জন্য State তৈরি করি
  // এখানে ৩টি option থাকবে: rating, pages এবং year
  const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating");

  // Step 3: Sorting করার জন্য একটি reusable function তৈরি করি
  const sortBooks = (books: TBook[]) => {
    // Original array পরিবর্তন না করে নতুন array তৈরি করি
    const sortedBooks = [...books];

    // Rating অনুযায়ী বড় থেকে ছোট সাজানো
    if (sortBy === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    }

    // Total pages অনুযায়ী বড় থেকে ছোট সাজানো
    else if (sortBy === "pages") {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
    }

    // Publishing year অনুযায়ী নতুন থেকে পুরোনো সাজানো
    else if (sortBy === "year") {
      sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }

    // Sorting শেষে নতুন array Return করি
    return sortedBooks;
  };

  // Step 4: Read Books এবং Wishlist উভয়কে Sort করি
  const sortedReadBooks = sortBooks(readBooks);
  const sortedWishlistBooks = sortBooks(wishlist);

  return (
    <div>
      {/* Step 5: Page Heading */}
      <h2 className="text-5xl p-10 m-10 text-center bg-amber-400 rounded-4xl font-bold">
        Listed Books
      </h2>

      {/* Step 6: Sorting Dropdown */}
      <div className="text-center mb-8">
        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value as "rating" | "pages" | "year")
          }
          className="select select-success"
        >
          <option value="rating">Rating</option>
          <option value="pages">Number of Pages</option>
          <option value="year">Publishing Year</option>
        </select>
      </div>

      {/* Step 7: Wishlist এবং Read Books Tabs */}
      <div className="tabs tabs-border">

        {/* Wishlist Tab */}
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Wish List (${wishlist.length})`}
        />

        <div className="tab-content border-base-300 bg-base-100 p-10">
          {wishlist.length > 0 ? (
            sortedWishlistBooks.map((book: TBook) => (
              <BookCard key={book.bookId} book={book} />
            ))
          ) : (
            <p className="text-center text-3xl text-red-400">
              No Wish List Book
            </p>
          )}
        </div>

        {/* Read Books Tab */}
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Read List (${readBooks.length})`}
          defaultChecked
        />

        <div className="tab-content border-base-300 bg-base-100 p-10">
          {readBooks.length > 0 ? (
            sortedReadBooks.map((book: TBook) => (
              <BookCard key={book.bookId} book={book} />
            ))
          ) : (
            <p className="text-center text-3xl text-red-400">
              No Read Books
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBookspage;
