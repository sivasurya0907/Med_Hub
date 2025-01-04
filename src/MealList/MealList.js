import React from "react";
import Meal from "../Meal/Meal";
const MealList = ({ mealData }) => {
  const nutrients = mealData.nutrients;

  return (
    <main className="mainMe">
      <section className="nutrients">
        <h1>MedHub</h1>
        <ul class="ulM">
          <li class="liM">Calories: {nutrients.calories.toFixed(0)}</li>
          <li class="liM">Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</li>
          <li class="liM">Fat: {nutrients.fat.toFixed(0)}</li>
          <li class="liM">Protein: {nutrients.protein.toFixed(0)}</li>
        </ul>
      </section>

      <section className="meals">
        {mealData.meals.map((meal) => (
          <Meal key={meal.id} meal={meal} />
        ))}
      </section>
    </main>
  );
};

export default MealList;