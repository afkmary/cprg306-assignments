"use client";

import { useState } from "react";
import ItemList from "./ItemList";
import NewItem from "./NewItem";
import itemsData from "./items.json";

export default function Page() {

  const [items, setItems] = useState(itemsData);

  // Event handler to add a new item
  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-black p-8">
      <section className="mx-auto max-w-2xl space-y-8">
        <h1 className="text-3xl font-bold text-center">
          Shopping List
        </h1>

        {/* Form */}
        <NewItem onAddItem={handleAddItem} />

        {/* List */}
        <ItemList items={items} />
      </section>
    </main>
  );
}