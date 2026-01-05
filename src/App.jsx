import { useState } from "react";
import BookList from "./booklist.jsx";

function App() {
  const [books] = useState([
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      description:
        "A novel set in the American South during the 1930s."
    },
    {
      title: "1984",
      author: "George Orwell",
      description:
        "A dystopian novel set in a totalitarian regime."
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description:
        "A novel depicting the Jazz Age and the American Dream."
    }
  ]);

  return (
    <div style={styles.app}>
      <h1 style={styles.heading}>Book List</h1>
      <BookList books={books} />
    </div>
  );
}

const styles = {
  app: {
    minHeight: "100vh",
    backgroundColor: "#020b2d",
    padding: "40px",
    textAlign: "center",
    color: "white"
  },
  heading: {
    marginBottom: "30px"
  }
};

export default App;
