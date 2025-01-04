import React, { useState } from "react";
import axios from "axios";
import MealList from '../MealList/MealList';
import '../App1/App.css'
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

const App1 = () => {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  const getMealData = () => {
    axios.get(`https://api.spoonacular.com/mealplanner/generate?apiKey=cb1c464d94f142c08b156c5beddade8b&timeFrame=day&targetCalories=${calories}`)
      .then((response) => {
        setMealData(response.data);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  };

  const handleChange = (e) => {
    setCalories(e.target.value);
  };

  return (
    <>
    <Nav></Nav>
    <div className="App">
      <section className="controls">
        <input
          type="number"
          placeholder="Calories (e.g. 2000)"
          onChange={handleChange}
          className="inputMe"
        />
        <button className="buttonMe" onClick={getMealData}>Get Daily Meal Plan</button>
      </section>
      {mealData && <MealList mealData={mealData} />}
    </div>
   
    </>
  );
};

export default App1;