"use client";

import { useEffect, useState } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(ingredient)}`
  );

  const data = await response.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function loadMealIdeas() {
    if (!ingredient) {
      setMeals([]);
      return;
    }

    try {
      const mealIdeas = await fetchMealIdeas(ingredient);
      setMeals(mealIdeas);
    } catch (error) {
      console.error("Error loading meal ideas:", error);
      setMeals([]);
    }
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold text-slate-900">
        {ingredient ? `Meal Ideas for "${ingredient}"` : "Meal Ideas"}
      </h2>

      {!ingredient ? (
        <p className="text-slate-500">Select an item to see meal ideas.</p>
      ) : meals.length === 0 ? (
        <p className="text-slate-500">No meals found.</p>
      ) : (
        <ul className="grid gap-3">
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="rounded-lg border border-slate-200 bg-slate-50 p-3 shadow-sm hover:bg-slate-100"
            >
              {meal.strMeal}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}