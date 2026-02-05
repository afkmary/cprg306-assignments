export default function Item({ name, quantity, category }) {
  return (
    <li className="flex justify-between items-center p-4 mb-3 rounded-lg bg-rose-100 shadow-md border border-gray-200">
      <div>
        <p className="font-semibold text-gray-800">{name}</p>
        <p className="text-sm text-gray-500 capitalize">{category}</p>
      </div>

      <span className="text-sm font-medium text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
        Qty: {quantity}
      </span>
    </li>
  );
}
