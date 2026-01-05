function BookCard({ title, author, description }) {
  return (
    <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 w-64 hover:scale-105 transform transition duration-300">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="mb-2"><span className="font-bold">Author:</span> {author}</p>
      <p>{description}</p>
    </div>
  );
}
export default BookCard;