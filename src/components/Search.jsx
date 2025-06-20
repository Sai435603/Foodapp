import { useEffect, useState } from "react";
import styles from "./search.module.css";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "bc82267a7c274273b2a00d93d1380552";
export default function search({ setFoodData }) {
  const [query, setQuery] = useState("pizza");
  useEffect(() => {
    //async function
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      // const data = [
      //   {
      //     id: 658615,
      //     title: "Roasted Peppers, Spinach & Feta Pizza",
      //     image: "https://img.spoonacular.com/recipes/658615-312x231.jpg",
      //     imageType: "jpg",
      //   },
      //   {
      //     id: 658920,
      //     title: "Rustic Grilled Peaches Pizza",
      //     image: "https://img.spoonacular.com/recipes/658920-312x231.jpg",
      //     imageType: "jpg",
      //   },
      //   {
      //     id: 656329,
      //     title: "Pizza bites with pumpkin",
      //     image: "https://img.spoonacular.com/recipes/656329-312x231.jpg",
      //     imageType: "jpg",
      //   },
      //   {
      //     id: 680975,
      //     title: "BLT Pizza",
      //     image: "https://img.spoonacular.com/recipes/680975-312x231.jpg",
      //     imageType: "jpg",
      //   },
      //   {
      //     id: 716300,
      //     title: "Plantain Pizza",
      //     image: "https://img.spoonacular.com/recipes/716300-312x231.jpg",
      //     imageType: "jpg",
      //   },
      //   {
      //     id: 665769,
      //     title: "Zucchini Pizza Boats",
      //     image: "https://img.spoonacular.com/recipes/665769-312x231.jpg",
      //     imageType: "jpg",
      //   },
      //   {
      //     id: 655698,
      //     title: "Pepperoni Pizza Muffins",
      //     image: "https://img.spoonacular.com/recipes/655698-312x231.jpg",
      //     imageType: "jpg",
      //   },
      //   {
      //     id: 641893,
      //     title: "Easy Cheesy Pizza Casserole",
      //     image: "https://img.spoonacular.com/recipes/641893-312x231.jpg",
      //     imageType: "jpg",
      //   },
      //   {
      //     id: 654523,
      //     title: "Paneer & Fig Pizza",
      //     image: "https://img.spoonacular.com/recipes/654523-312x231.jpg",
      //     imageType: "jpg",
      //   },
      //   {
      //     id: 655847,
      //     title: "Pesto Veggie Pizza",
      //     image: "https://img.spoonacular.com/recipes/655847-312x231.jpg",
      //     imageType: "jpg",
      //   },
      // ];
      // console.log(data);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        value={query}
      />
    </div>
  );
}
