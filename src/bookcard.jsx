function BookCard({ title, author, description }) {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <p style={styles.author}>Author: {author}</p>
      <p>{description}</p>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#f8f1e7",
    color: "#000",
    width: "220px",
    padding: "15px",
    borderRadius: "6px",
    textAlign: "left",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
  },
  author: {
    fontWeight: "bold",
    marginBottom: "8px"
  }
};

export default BookCard;
