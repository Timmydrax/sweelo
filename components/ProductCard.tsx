export default function ProductCard() {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold mb-2">Product Name</h2>
      <p className="text-gray-600 mb-4">Product description goes here.</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add to Cart
      </button>
    </div>
  );
}
