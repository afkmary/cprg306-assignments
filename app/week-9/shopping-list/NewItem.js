"use client";

import { useState } from "react";

const initialState = {
  name: "",
  quantity: 1,
  category: "produce",
};

export default function NewItem({ onAddItem }) {
  const [item, setItem] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setItem((prev) => ({
      ...prev,
      [name]: name === "quantity" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      ...item,
      id: crypto.randomUUID(),
      name: item.name.trim(),
    };

    onAddItem(newItem);
    setItem(initialState);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-150 space-y-4 rounded-xl bg-white p-6 text-slate-900 shadow"
    >
      <h2 className="text-xl font-semibold">Add New Item</h2>

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Item Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={item.name}
          onChange={handleChange}
          className="w-full rounded-md border border-slate-300 p-2"
          placeholder="e.g bread 🍞"
        />
      </div>

      {/* Quantity + Category */}
      <div className="flex gap-3">

        <div className="w-full">
          <label htmlFor="quantity" className="block text-sm font-medium mb-1">
            Quantity (1 - 20)
          </label>
          <div className="flex items-center gap-3">
            <p className="text-sm text-slate-600">
              Current: <span className="font-semibold">{item.quantity}</span>
            </p>

            <button
              type="button"
              onClick={() =>
                setItem((prev) => ({
                  ...prev,
                  quantity: Math.max(1, prev.quantity - 1),
                }))
              }
              disabled={item.quantity <= 1}
              className="h-8 w-8 rounded-md bg-slate-200 text-lg font-semibold
                 hover:bg-slate-300 disabled:opacity-50"
            >
              –
            </button>

            <button
              type="button"
              onClick={() =>
                setItem((prev) => ({
                  ...prev,
                  quantity: Math.min(99, prev.quantity + 1),
                }))
              }
              className="h-8 w-8 rounded-md bg-blue-500 text-lg font-semibold text-white
                 hover:bg-blue-600"
            >
              +
            </button>
          </div>
        </div>

        <div className="w-full">
          <label htmlFor="category" className="block text-sm font-medium mb-1">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={item.category}
            onChange={handleChange}
            className="w-full rounded-md border border-slate-300 p-2"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen-foods">Frozen Foods</option>
            <option value="canned-goods">Canned Goods</option>
            <option value="dry-goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-emerald-600 py-2 text-white hover:bg-emerald-700"
      >
        Add Item
      </button>
    </form>
  );
}