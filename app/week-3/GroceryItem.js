export default function Item({ name, quantity, category }) {
  return (
    <li className="flex flex-col gap-1 p-4 border rounded">
      <p className="font-semibold">{name}</p>
      <p className="text-sm">Quantity: {quantity}</p>
      <p className="text-sm">Category: {category}</p>
    </li>
  );
}
