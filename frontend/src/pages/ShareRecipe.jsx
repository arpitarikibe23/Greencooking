import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ShareRecipe = () => {
  const [recipe, setRecipe] = useState({
    title: "",
    ingredients: "",
    steps: "",
    instructions: "",
    cookingTime: "",
    recipeUrl: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("recipeData", JSON.stringify(recipe));
    navigate("/save-recipe");
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h2 className="text-center">Share Your Recipe</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input type="text" className="form-control" name="title" placeholder="Recipe Title" required onChange={handleChange} />
          </div>
          <div className="mb-3">
            <textarea className="form-control" name="ingredients" placeholder="Ingredients (comma-separated)" required onChange={handleChange} />
          </div>
          <div className="mb-3">
            <textarea className="form-control" name="steps" placeholder="Cooking Steps" required onChange={handleChange} />
          </div>
          <div className="mb-3">
            <textarea className="form-control" name="instructions" placeholder="Additional Instructions" required onChange={handleChange} />
          </div>
          <div className="mb-3">
            <input type="number" className="form-control" name="cookingTime" placeholder="Cooking Time (in minutes)" required onChange={handleChange} />
          </div>
          <div className="mb-3">
            <input type="url" className="form-control" name="recipeUrl" placeholder="Image URL" required onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-success w-100">Save Recipe</button>
        </form>
      </div>
    </div>
  );
};

export default ShareRecipe;
