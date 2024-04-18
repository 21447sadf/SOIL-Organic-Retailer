import React, { useEffect, useState } from "react";

function MealPlanning() {
    //API to fetch recipes from
    const URL = "https://api.spoonacular.com/recipes/complexSearch";

    //Hooks to manage the retrieval of recipes from the API
    const [meals, setMeals] = useState(null);
    const [getMeals, setGetMeals] = useState(true);

    //Use Effect to call the API
    useEffect(() => {
        if(getMeals) {
        //Use promise to call the API asynchronously
        fetch(URL).then(response => response.json()).then(results => {
            setMeals(results);
            setGetMeals(false);
        });
        }
    }, [getMeals]);

    //Button function to handle submitting requests 
    const submitRequest = () => {
        setMeals(null);
        setGetMeals(true);
    }

    return (
        <div className="PersonaliseMealsForm">
            {/* Conditionally render loading message, or results from API */}
            {
                meals === null ? 
                <p>Please wait while we fetch some meals for you...</p>
                :
                <div>
                    {meals.size}
                    {/* {meals.map(meals => (
                        <li key = {meals.id}>
                            {meals.minProteinPercent} | {meals.maxProteinPercent}
                        </li>
                    ))} */}
                </div>
                }
            <label for="MealInput">Enter your meal type:</label>
            <input id="MealInput "type="Meal" placeholder="Enter meal here" />
            <button className="Submit-Meals-Request" onClick={submitRequest}>Find meals</button>
        </div>
    );
};

export default MealPlanning;