"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items = [] }) {
  const [sortBy, setSortBy] = useState("name");

  const baseBtn =
    "rounded-md px-3 py-2 text-sm font-medium ring-1 ring-slate-300";
  const activeBtn = "bg-blue-400 text-white";
  const inactiveBtn = "bg-white text-slate-900 hover:bg-slate-50";

  // sorted list
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "category") {
      const catCompare = a.category.localeCompare(b.category);
      if (catCompare !== 0) return catCompare;
      return a.name.localeCompare(b.name);
    }

    return a.name.localeCompare(b.name);
  });

  // group by category 
  const itemsByCategory = items.reduce((groups, item) => {
    const category = item.category;
    if (!groups[category]) groups[category] = [];
    groups[category].push(item);
    return groups;
  }, {});

  const sortedCategories = Object.keys(itemsByCategory).sort((a, b) =>
    a.localeCompare(b)
  );

  // sort items within each category by name
  for (const category of sortedCategories) {
    itemsByCategory[category] = [...itemsByCategory[category]].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  return (
    <div className="mx-auto mt-6 max-w-md space-y-6">

      {/* Buttons */}
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setSortBy("name")}
          className={`${baseBtn} ${sortBy === "name" ? activeBtn : inactiveBtn}`}
        >
          Sort by Name
        </button>

        <button
          type="button"
          onClick={() => setSortBy("category")}
          className={`${baseBtn} ${sortBy === "category" ? activeBtn : inactiveBtn
            }`}
        >
          Sort by Category
        </button>

        <button
          type="button"
          onClick={() => setSortBy("grouped")}
          className={`${baseBtn} ${sortBy === "grouped" ? activeBtn : inactiveBtn
            }`}
        >
          Group by Category
        </button>
      </div>

      {/* Render */}
      {sortBy === "grouped" ? (
        <div className="space-y-6">
          {sortedCategories.map((category) => (
            <section key={category}>
              <h2 className="mb-3 text-xl font-bold capitalize">{category}</h2>

              <ul className="space-y-3">
                {itemsByCategory[category].map((item) => (
                  <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                  />
                ))}
              </ul>
            </section>
          ))}
        </div>
      ) : (
        <ul className="space-y-3">
          {sortedItems.map((item) => (
            <Item key={item.id} name={item.name} quantity={item.quantity} />
          ))}
        </ul>
      )}
    </div>
  );
}