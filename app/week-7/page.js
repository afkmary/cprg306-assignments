"use client";

import { useState } from "react";
import ItemList from "./ItemList";
import NewItem from "./NewItem";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((prev) => [...prev, newItem]);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-black p-8">
      <section className="mx-auto w-full max-w-150 space-y-8">
        <h1 className="text-3xl font-bold text-center text-white">
          Shopping List
        </h1>

        <NewItem onAddItem={handleAddItem} />

        <ItemList items={items} />
      </section>
    </main>
  );
}