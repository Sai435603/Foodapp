import styles from "./foodItem.module.css";
export default function FoodItem({ food, setFoodId }) {
  const foodTitle = food.title;
  const img = food.image;
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={img} alt="" />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{foodTitle}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.itemButton}
          onClick={() => setFoodId(food.id)}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
