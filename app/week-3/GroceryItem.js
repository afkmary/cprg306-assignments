export default function Item({ name, quantity, category }) {
  return (
    <li className="flex justify-between items-center p-4 border rounded-lg bg-white shadow-sm ring-3 ring-pink-300 hover:ring-pink-400">
      <div>
        <p className="font-semibold text-gray-800">{name}</p>
        <p className="text-sm text-gray-500">Category: {category}</p>
      </div>
      <span className="text-sm font-medium text-gray-700">
        Qty: {quantity}
      </span>
    </li>
  );
}
