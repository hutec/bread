import "./App.css";
import Recipes from "./recipes";
import React from "react";
import { HashRouter, Switch, Route, NavLink } from "react-router-dom";

const Step = ({ title, description }) => {
  return (
    <div className="py-3 border-b-2">
      <h1 className="font-semibold text-xl underline">{title}</h1>
      <p className="pl-4 pt-2">{description}</p>
    </div>
  );
};

const RecipeContent = ({ recipe }) => {
  const steps = recipe.steps;
  return (
    <div>
      {Object.entries(steps).map(([title, description]) => (
        <Step key={title} title={title} description={description} />
      ))}
    </div>
  );
};

const RecipeCalculator = ({ recipe }) => {
  if (!recipe.ratios) {
    return <></>;
  }

  const ratios = Object.entries(recipe.ratios);
  const base = recipe.base;

  return (
    <div className="border shadow-md rounded-md w-1/2 mx-auto p-2">
      <ul className="table mt-2">
        <li className="table-row">
          <td className="border-b"></td>
          <span className="table-cell border-b">Percentage</span>
          <span className="table-cell pl-4 border-b">Weight</span>
        </li>
        {ratios.map(([ingredient, ratio]) => (
          <li key={ingredient} className="table-row">
            <span className="table-cell font-semibold">{ingredient}</span>
            <span className="table-cell pl-4 text-right">{ratio} %</span>
            <span className="table-cell pl-4 text-right">
              {(base * (ratio / 100)).toFixed(0)}g
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

function App() {
  const recipes = Object.values(Recipes);
  return (
    <HashRouter>
      <div className="bg-yellow-50 font-serif min-h-screen">
        <header className="bg-yellow-400 py-3">
          <nav className="w-7/12 mx-auto">
            <ul className="flex flex-row space-x-6 text-3xl">
              {recipes.map((recipe) => (
                <li key={recipe.url}>
                  <NavLink activeClassName="font-bold" to={"/" + recipe.url}>
                    {recipe.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <div className="w-10/12 mx-auto max-w-2xl mt-8">
          <Switch>
            {recipes.map((recipe) => (
              <Route key={recipe.url} path={"/" + recipe.url}>
                <RecipeCalculator recipe={recipe} />
                <RecipeContent recipe={recipe} />
              </Route>
            ))}
          </Switch>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
