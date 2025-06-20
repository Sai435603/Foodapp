import { useEffect, useState } from "react";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "bc82267a7c274273b2a00d93d1380552";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div>
        <h1>{food.title}</h1>
        <img src={food.image} alt="" />
        <div>
          <span>
            <strong>⏱️{food.readtInMinutes} Minutes</strong>
          </span>
          <span>
            👨‍👩‍👧‍👦<strong>Serves {food.servings}</strong>
          </span>
          <span>{food.vegetarian ? "🥕Vegetarian" : "🍖Non-Vegetarian"}</span>
          <span>{food.vegan ? " 🐮 Vegen" : ""}</span>
        </div>
        <div>
          $ <span>{food.pricePerServing / 100} Per servig</span>
        </div>
        <h2>Instructions</h2>
        <div>
          <ol>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            food.analyzedInstructions[0].steps.map((step) => (
              <li>{step.step}</li>
            ))
          )}
          </ol>
        </div>
      </div>
    </div>
  );
}
