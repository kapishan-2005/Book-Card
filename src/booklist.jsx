import BookCard from './bookcard.jsx';
function BookList({ books }) {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {books.map((book, index) => (
        <BookCard
          key={index}
          title={book.title}
          author={book.author}
          description={book.description}
        />
      ))}
    </div>
  );
}
export default BookList;