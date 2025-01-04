import React, { useState, useEffect } from "react";
import axios from 'axios';
const Meal = ({ meal }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    axios.get(`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=cb1c464d94f142c08b156c5beddade8b&includeNutrition=false`)
      .then((response) => {
        setImageUrl(response.data.image);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [meal.id]);

  return (
    <article className="articleMe">
      <h1 class="h1Me">{meal.title}</h1>
      <img src={imageUrl} alt="recipe" className="imgMe"/>
      <ul className="instructions">
        <li>Preparation time: {meal.readyInMinutes} minutes</li>
        <li>Number of servings: {meal.servings}</li>
      </ul>
      <a href={meal.sourceUrl} className="aMe">Go to Recipe</a>
    </article>
  );
}

export default Meal;