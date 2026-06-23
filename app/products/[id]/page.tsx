export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Product Details</h1>
      <p className="text-lg text-gray-600">Product ID: {params.id}</p>
    </div>
  );
}