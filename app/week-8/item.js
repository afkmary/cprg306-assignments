export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      onClick={onSelect}
      className="flex justify-between items-center p-4 mb-3 rounded-lg bg-slate-100 shadow-md border border-gray-200 cursor-pointer"
    >
      <div>
        <p className="text-gray-800">{name}</p>
        <p className="text-sm text-gray-500 capitalize">{category}</p>
      </div>

      <span className="text-sm font-medium text-gray-500">
        Qty: {quantity}
      </span>
    </li>
  );
}