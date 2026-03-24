"use client";

import { useState, useEffect } from "react";
import { useUserAuth } from "../../../contexts/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

import ItemList from "./ItemList";
import NewItem from "./NewItem";
import MealIdeas from "./MealIdeas";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
  const { user, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  const loadItems = async () => {
    if (!user) return;

    const loadedItems = await getItems(user.uid);
    setItems(loadedItems);
  };

  useEffect(() => {
    if (!user) {
      router.push("/week-10");
      return;
    }

    loadItems();
  }, [user, router]);

  if (!user) {
    return <p className="p-6 text-white">Redirecting...</p>;
  }

  const handleAddItem = async (newItem) => {
    if (!user) return;

    const id = await addItem(user.uid, newItem);

    if (id) {
      const itemWithId = { id, ...newItem };
      setItems((prevItems) => [...prevItems, itemWithId]);
    }
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(",")[0]
      .replace(/[^\p{L}\p{N}\s]/gu, "")
      .trim()
      .toLowerCase();

    setSelectedItemName(cleanedName);
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
      router.push("/week-10");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <main className="min-h-screen bg-black p-8 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold">Shopping List + Meal Ideas</h1>

          <div className="flex gap-4 items-center">
            <p className="text-sm">{user.displayName}</p>

            <Link
              href="/week-10/profile"
              className="underline text-blue-400"
            >
              Profile
            </Link>

            <button
              onClick={handleLogout}
              className="px-3 py-1 bg-red-500 rounded"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="flex gap-10 items-start">
          <div className="w-1/2 space-y-8">
            <NewItem onAddItem={handleAddItem} />
            <ItemList
              items={items}
              onItemSelect={handleItemSelect}
            />
          </div>

          <div className="w-1/2">
            <div className="rounded-xl bg-white p-6 text-slate-900 shadow min-h-65">
              <MealIdeas ingredient={selectedItemName} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}