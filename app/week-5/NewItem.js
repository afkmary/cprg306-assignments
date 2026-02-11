"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function handleSubmit(event) {
    event.preventDefault();

    const item = {
      name: name.trim(),
      quantity: Number(quantity),
      category,
    };

    console.log(item);
    alert(
      `Added: ${item.name}, quantity: ${item.quantity}, category: ${item.category}`
    );

    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md space-y-4 rounded-xl bg-white p-6 text-slate-900 shadow"
    >
      <h2 className="text-xl font-semibold">Add New Item</h2>

      {/* Name Field */}
      <input
        type="text"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full rounded-md border border-slate-300 p-2"
        placeholder="Item name"
      />

      {/* Quantity + Category */}
      <div className="flex gap-3">
        <input
          type="number"
          min={1}
          max={99}
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="w-full rounded-md border border-slate-300 p-2"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
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

      {/* Submit */}
      <button
        type="submit"
        className="w-full rounded-md bg-blue-600 py-2 text-white hover:bg-blue-700"
      >
        +
      </button>
    </form>
  );
}
