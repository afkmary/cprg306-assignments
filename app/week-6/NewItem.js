"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const categories = [
    { value: "produce", label: "Produce" },
    { value: "dairy", label: "Dairy" },
    { value: "bakery", label: "Bakery" },
    { value: "meat", label: "Meat" },
    { value: "frozen-foods", label: "Frozen Foods" },
    { value: "canned-goods", label: "Canned Goods" },
    { value: "dry-goods", label: "Dry Goods" },
    { value: "beverages", label: "Beverages" },
    { value: "snacks", label: "Snacks" },
    { value: "household", label: "Household" },
    { value: "other", label: "Other" },
  ];

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedName = name.trim();
    if (!trimmedName) return;

    const id =
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : Math.random().toString(36).substring(2, 9);

    const item = {
      id,
      name: trimmedName,
      quantity,
      category,
    };

    onAddItem?.(item);

    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-md space-y-4 rounded-xl bg-white p-6 text-slate-900 shadow"
    >
      <h2 className="text-xl font-semibold">Add New Item</h2>

      {/* Name */}
      <div className="space-y-1">
        <label htmlFor="name" className="block text-sm font-medium">
          Item Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-md border border-slate-300 p-2"
          placeholder="Item name"
        />
      </div>

      {/* Quantity + Category */}
      <div className="flex gap-3">
        <div className="w-full space-y-1">
          <label htmlFor="quantity" className="block text-sm font-medium">
            Quantity
          </label>
          <input
            id="quantity"
            type="number"
            min={1}
            max={99}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full rounded-md border border-slate-300 p-2"
          />
        </div>

        <div className="w-full space-y-1">
          <label htmlFor="category" className="block text-sm font-medium">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-md border border-slate-300 p-2"
          >
            {categories.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full rounded-md bg-pink-300 py-2 text-white hover:opacity-90"
      >
        +
      </button>
    </form>
  );
}