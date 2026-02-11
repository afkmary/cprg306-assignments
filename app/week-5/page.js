"use client";

import { useState } from "react";

// Sample data for filtering exercise
const products = [
  { id: 1, name: "Laptop", category: "electronics", price: 999 },
  { id: 2, name: "Desk Chair", category: "furniture", price: 199 },
  { id: 3, name: "Notebook", category: "stationery", price: 5 },
  { id: 4, name: "Headphones", category: "electronics", price: 149 },
  { id: 5, name: "Desk Lamp", category: "furniture", price: 45 },
  { id: 6, name: "Pen Set", category: "stationery", price: 12 },
];

export default function StateEventsLab() {
  // PROBLEM 1: Counter
  const [count, setCount] = useState(0);

  // PROBLEM 2: Disabled checkbox
  const [isDisabled, setIsDisabled] = useState(false);

  // PROBLEM 3: Theme toggle
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // PROBLEM 4: Filter products (start with all)
  const [filteredProducts, setFilteredProducts] = useState(products);

  function handleFilter(category) {
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((p) => p.category === category));
    }
  }

  // PROBLEM 5: Show/Hide content
  const [showDetails, setShowDetails] = useState(true);

  return (
    <div className="p-8 space-y-12">
      <h1 className="text-3xl font-bold mb-8">State and Events Lab</h1>

      {/* PROBLEM 1 & 2: Counter with Increase/Decrease + Disabled State */}
      <section className="border p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">
          Problems 1 & 2: Counter with Disable
        </h2>
        <p className="text-gray-600 mb-2">
          <strong>Problem 1:</strong> Create a counter that displays a number
          and has buttons to increase and decrease it.
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Problem 2:</strong> Add a checkbox that disables/enables the
          counter buttons.
        </p>

        {/* Problem 2: Add state to track disabled status */}
        <div className="mb-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={isDisabled}
              onChange={(e) => setIsDisabled(e.target.checked)}
            />
            <span>Disable counter buttons</span>
          </label>
        </div>

        {/* (Problem 1): Display the counter value */}
        <div className="text-2xl mb-4">Count: {count}</div>

        {/* (Problem 1): onClick handlers to modify the counter */}
        {/* (Problem 2): Add disabled={isDisabled} attribute to both buttons */}
        <div className="space-x-2">
          <button
            disabled={isDisabled}
            onClick={() => setCount((c) => c + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Increase
          </button>
          <button
            disabled={isDisabled}
            onClick={() => setCount((c) => c - 1)}
            className="px-4 py-2 bg-red-500 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Decrease
          </button>
        </div>
      </section>

      {/* PROBLEM 3: Theme Toggle on Card */}
      <section className="border p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Problem 3: Theme Toggle</h2>
        <p className="text-gray-600 mb-4">
          Toggle between two different color themes for the card below.
        </p>

        <div
          className={
            isDarkTheme
              ? "p-6 rounded-lg bg-slate-900 text-white"
              : "p-6 rounded-lg bg-slate-100 text-slate-900"
          }
        >
          <h3 className="text-lg font-semibold mb-2">Sample Card</h3>
          <p>This card should change colors when you click the button.</p>
        </div>

        <button
          onClick={() => setIsDarkTheme((t) => !t)}
          className="mt-4 px-4 py-2 bg-purple-500 text-white rounded"
        >
          Toggle Theme
        </button>
      </section>

      {/* PROBLEM 4: Filter Array by Category */}
      <section className="border p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">
          Problem 4: Filter Products
        </h2>
        <p className="text-gray-600 mb-4">
          When a category button is clicked, display only products from that
          category. The "All" button should display all products.
        </p>

        <div className="space-x-2 mb-4">
          <button
            onClick={() => handleFilter("all")}
            className="px-4 py-2 bg-gray-500 text-white rounded"
          >
            All
          </button>
          <button
            onClick={() => handleFilter("electronics")}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Electronics
          </button>
          <button
            onClick={() => handleFilter("furniture")}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Furniture
          </button>
          <button
            onClick={() => handleFilter("stationery")}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Stationery
          </button>
        </div>

        {/* Map over your state variable and display each product */}
        <div className="space-y-2">
          {filteredProducts.map((p) => (
            <div key={p.id} className="p-3 bg-gray-50 rounded">
              <span className="font-semibold text-slate-900">{p.name}</span> -{" "}
              <span className="text-gray-600"> {p.category}</span> -{" "}
              <span className="text-green-600"> ${p.price}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PROBLEM 5: Show/Hide Content Toggle */}
      <section className="border p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">
          Problem 5: Show/Hide Toggle
        </h2>
        <p className="text-gray-600 mb-4">
          Create a button that shows and hides the content below. The button
          text should change based on whether content is visible.
        </p>

        {/* Add state to track whether content is visible (boolean) */}
        {/* Add onClick handler to toggle the visibility state */}
        {/* Use ternary operator to change button text between "Show" and "Hide" */}
        <button
          onClick={() => setShowDetails((prev) => !prev)}
          className={`px-4 py-2 text-white rounded mb-4 ${showDetails ? "bg-rose-500 hover:bg-rose-600" : "bg-indigo-500 hover:bg-indigo-600"
            }`}
        >
          {showDetails ? "Hide Details" : "Show Details"}
        </button>

        {showDetails && (
          <div className="p-4 bg-indigo-50 border-l-4 border-indigo-500 rounded">
            <h3 className="font-semibold mb-2">Hidden Content</h3>
            <p>
              This content should toggle on and off when you click the button
              above.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              his pattern is commonly used for FAQs, expandable sections, and
              accordions.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
