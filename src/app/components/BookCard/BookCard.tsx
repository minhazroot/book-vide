import Image from "next/image";
import { TBook } from "@/app/type/books.type";
import Link from "next/link";


interface BookCardProps {
  book: TBook;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <div className="group bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Book Image */}
      <div className="bg-gray-100 rounded-2xl h-64 flex items-center justify-center p-6 overflow-hidden">
        <Image
          src={book.image}
          alt={book.bookName}
          width={200}
          height={220}
          className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-3 mt-6">
        {book.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Book Name */}
      <h2 className="text-2xl font-bold text-gray-900 mt-5 mb-3 line-clamp-2">
        {book.bookName}
      </h2>

      {/* Author */}
      <p className="text-gray-600 text-lg">By : {book.author}</p>

      {/* Divider */}
      <div className="border-t border-dashed border-gray-300 my-5"></div>

      {/* Category and Rating */}
      <div className="flex items-center justify-between text-gray-600">
        <span className="font-medium">{book.category}</span>

        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-800">
            {book.rating.toFixed(2)}
          </span>
          <span className="text-xl">☆</span>
        </div>
      </div>

      {/* Extra Information */}
      <div className="flex justify-between text-sm text-gray-400 mt-4">
        <span>{book.totalPages} Pages</span>
        <span>{book.yearOfPublishing}</span>
      </div>
      <div>
        <Link href={`/books/${book.bookId}`}>
          <button className="btn btn-wide">See Details</button>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
