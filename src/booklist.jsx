import BookCard from "./bookcard.jsx";

function BookList({ books }) {
  return (
    <div style={styles.list}>
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

const styles = {
  list: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap"
  }
};

export default BookList;
