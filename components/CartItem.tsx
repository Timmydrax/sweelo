export default function CartItem() {
  return (
    <div className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 mb-4">
      <div>
        <h2 className="text-xl font-bold mb-2">Product Name</h2>
        <p className="text-gray-600">Quantity: 1</p>
      </div>
      <p className="text-gray-800 font-bold">$19.99</p>
    </div>
  );
}
