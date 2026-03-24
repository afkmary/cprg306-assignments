"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items = [], onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const baseBtn = "rounded-md px-3 py-2 text-sm font-medium ring-1 ring-slate-300";
  const activeBtn = "bg-blue-400 text-white";
  const inactiveBtn = "bg-white text-slate-900 hover:bg-slate-50";

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "category") {
      const catCompare = a.category.localeCompare(b.category);
      if (catCompare !== 0) return catCompare;
      return a.name.localeCompare(b.name);
    }
    return a.name.localeCompare(b.name);
  });

  const itemsByCategory = items.reduce((groups, item) => {
    const category = item.category;
    if (!groups[category]) groups[category] = [];
    groups[category].push(item);
    return groups;
  }, {});

  const sortedCategories = Object.keys(itemsByCategory).sort((a, b) =>
    a.localeCompare(b)
  );

  for (const category of sortedCategories) {
    itemsByCategory[category] = [...itemsByCategory[category]].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  return (
    <div className="mt-6 w-full max-w-none items-center space-y-6">
      <div className="flex w-full items-center gap-3">
        <span className="text-sm font-medium whitespace-nowrap">
          Sort by:
        </span>

        <div className="grid flex-1 grid-cols-3 gap-2">
          <button onClick={() => setSortBy("name")} className={`${baseBtn} w-full ${sortBy === "name" ? activeBtn : inactiveBtn}`}>
            Name
          </button>
          <button onClick={() => setSortBy("category")} className={`${baseBtn} w-full ${sortBy === "category" ? activeBtn : inactiveBtn}`}>
            Category
          </button>
          <button onClick={() => setSortBy("grouped")} className={`${baseBtn} w-full ${sortBy === "grouped" ? activeBtn : inactiveBtn}`}>
            Group
          </button>
        </div>
      </div>

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
                    category={item.category}
                    onSelect={() => onItemSelect(item)}
                  />
                ))}
              </ul>
            </section>
          ))}
        </div>
      ) : (
        <ul className="space-y-3">
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
              onSelect={() => onItemSelect(item)}
            />
          ))}
        </ul>
      )}
    </div>
  );
}