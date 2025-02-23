import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SavedRecipes = () => {
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedRecipe = JSON.parse(localStorage.getItem("recipeData"));
    if (!savedRecipe) {
      alert("No recipe found!");
      navigate("/share-recipe");
    } else {
      setRecipe(savedRecipe);
    }
  }, [navigate]);

  const handleDelete = () => {
    localStorage.removeItem("recipeData"); // Remove recipe from local storage
    setRecipe(null); // Update state
    alert("Recipe deleted successfully!");
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h2 className="text-center">Saved Recipe</h2>
        {recipe ? (
          <div className="text-center">
            <h3>{recipe.title}</h3>
            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
            <p><strong>Steps:</strong> {recipe.steps}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
            <p><strong>Cooking Time:</strong> {recipe.cookingTime} minutes</p>
            <button className="btn btn-danger mt-3" onClick={handleDelete}>
              Delete Recipe
            </button>
          </div>
        ) : (
          <p className="text-center">No recipe saved yet.</p>
        )}
      </div>
    </div>
  );
};

export default SavedRecipes;
