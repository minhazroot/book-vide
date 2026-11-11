
import { TBook } from "@/app/type/books.type";
import Image from "next/image";
import { notFound } from "next/navigation";

interface BookDetailsPageProps {
  params: Promise<{
    bookid: string;
  }>;
}

const GetBooks = async (): Promise<TBook[]> => {
  const res = await fetch("http://localhost:3000/booksData.json");

  if (!res.ok) {
    throw new Error("Failed to fetch books data");
  }

  return res.json();
};

const BookDetailsPage = async ({
  params,
}: BookDetailsPageProps) => {
  const { bookid } = await params;

  const booksData = await GetBooks();

  const book = booksData.find(
    (item) => String(item.bookId) === bookid
  );

  if (!book) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto px-5 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-9">

        {/* Book Image */}
        <div className="bg-gray-100 rounded-2xl p-8 flex justify-center items-center">
          <Image
            src={book.image}
            alt={book.bookName}
            width={400}
            height={500}
            className="w-full max-w-[350px] h-[450px] object-contain"
          />
        </div>

        {/* Book Details */}
        <div className="flex flex-col">

          <h1 className="text-4xl font-bold mb-3">
            {book.bookName}
          </h1>

          <p className="text-gray-600 mb-5">
            By : {book.author}
          </p>

          <hr />

          <p className="py-3 ">{book.category}</p>

          <hr />

          <p className="text-gray-500 text-sm leading-6 my-5">
            <strong className="text-gray-800">Review : </strong>
            {book.review}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-6">
            <strong>Tag</strong>

            {book.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>

          <hr className="mb-5" />

          {/* Additional Information */}
          <div className="space-y-4 text-sm">
            <div className="grid grid-cols-2">
              <span>Number of Pages:</span>
              <strong>{book.totalPages}</strong>
            </div>

            <div className="grid grid-cols-2">
              <span>Publisher:</span>
              <strong>{book.publisher}</strong>
            </div>

            <div className="grid grid-cols-2">
              <span>Year of Publishing:</span>
              <strong>{book.yearOfPublishing}</strong>
            </div>

            <div className="grid grid-cols-2">
              <span>Rating:</span>
              <strong>{book.rating}</strong>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-8">
            <button className="btn btn-outline px-8">
              Read
            </button>

            <button className="btn bg-cyan-500 text-white border-none px-8">
              Wishlist
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
