"use client";

export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      onClick={onSelect}
      className="flex w-full items-center justify-between rounded-xl bg-white p-4 text-slate-900 shadow cursor-pointer"
    >
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-slate-600">
          Buy {quantity} in {category}
        </p>
      </div>
    </li>
  );
}