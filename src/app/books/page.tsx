
import BookCard from "../components/BookCard/BookCard";
import { TBook } from "../type/books.type";

const GetBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  const data = await res.json();

  return data;
};
const BooksPage = async () => {
  const Books = await GetBooks();

  return (
    <div>
      <h2 className="text-5xl flex justify-center items-center mb-5  text-clip"> Books</h2>
      <div className="grid grid-cols-3 gap-5">
        {Books.map((book:TBook) => (
          <BookCard key={book.bookId} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
