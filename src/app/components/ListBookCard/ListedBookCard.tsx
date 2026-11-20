import Image from "next/image";

interface Book {
  bookId: number;
  bookName: string;
  author: string;
  image: string;
  review: string;
  totalPages: number;
  rating: number;
  category: string;
  tags: string[];
  publisher: string;
  yearOfPublishing: number;
}

const ListedBookCard = ({ book }: { book: Book }) => {
  return (
    <div className="card bg-base-100 shadow-md border border-gray-200 p-5">
      <div className="flex flex-col md:flex-row gap-6">

        {/* Book Image */}
        <div className="flex justify-center md:justify-start">
          <Image
            src={book.image}
            alt={book.bookName}
            className="w-40 h-56 object-cover rounded-lg"
          />
        </div>

        {/* Book Information */}
        <div className="flex-1 space-y-3">

          <h2 className="text-2xl font-bold">
            {book.bookName}
          </h2>

          <p className="text-gray-600">
            By: {book.author}
          </p>

          <div className="flex flex-wrap gap-2">
            {book.tags.map((tag, index) => (
              <span
                key={index}
                className="badge badge-outline badge-success"
              >
                {tag}
              </span>
            ))}
          </div>

          <p>
            <span className="font-semibold">Category:</span>{" "}
            {book.category}
          </p>

          <p>
            <span className="font-semibold">Publisher:</span>{" "}
            {book.publisher}
          </p>

          <p>
            <span className="font-semibold">Published:</span>{" "}
            {book.yearOfPublishing}
          </p>

          <p>
            <span className="font-semibold">Pages:</span>{" "}
            {book.totalPages}
          </p>

          <p>
            <span className="font-semibold">Rating:</span>{" "}
            ⭐ {book.rating}
          </p>

          {/* Review */}
          <p className="text-gray-600 text-sm leading-relaxed">
            {book.review}
          </p>

          <button className="btn btn-primary btn-sm">
            View Details
          </button>

        </div>
      </div>
    </div>
  );
};

export default ListedBookCard;