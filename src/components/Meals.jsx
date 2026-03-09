import { useEffect, useState } from "react";

export function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("http://localhost:3000/meals");
      // Handle the fetched data

      if (!response.ok) {
        // Handle the error
      }

      const meals = await response.json();
      setLoadedMeals(meals);
    }
    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <li key={meal.id}>{meal.name}</li>
      ))}
    </ul>
  );
}
