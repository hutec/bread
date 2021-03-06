import "./App.css";
import Recipes from "./recipes";
import React, { useState } from "react";
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

const updateRatios = (ratios, ingredient, newRatio, setRatios) => {
  const newRatios = {
    ...ratios,
    [ingredient]: newRatio,
  };
  setRatios(newRatios);
};

const RecipeCalculator = ({ recipe }) => {
  const [ratios, setRatios] = useState(recipe.ratios);
  const [base, setBase] = useState(recipe.base);

  if (!recipe.ratios) {
    return <></>;
  }

  const total =
    Object.entries(ratios)
      .map(([_, ratio]) => base * ratio)
      .reduce((prev, curr) => prev + curr) / 100;

  return (
    <ul className="table shadow-md border rounded mx-auto p-2">
      <li className="table-row">
        <span className="table-cell border-b border-r"></span>
        <span className="table-cell pl-3 border-b font-semibold text-right">
          Percentage | %
        </span>
        <span className="table-cell pl-3 border-b font-semibold text-right">
          Weight | g
        </span>
      </li>
      {Object.entries(ratios).map(([ingredient, ratio]) => (
        <li key={ingredient} className="table-row">
          <span className="table-cell font-semibold text-right border-r pr-2">
            {ingredient}
          </span>

          {ingredient !== "Flour" ? (
            <input
              className="table-cell text-right w-full bg-yellow-50"
              type="number"
              value={ratio}
              onChange={(e) =>
                updateRatios(ratios, ingredient, e.target.value, setRatios)
              }
            />
          ) : (
            <span className="table-cell pl-4 text-right">{ratio}</span>
          )}
          {ingredient === "Flour" ? (
            <input
              className="table-cell text-right w-full bg-yellow-50 right-0"
              type="number"
              value={base}
              onChange={(e) => setBase(e.target.value)}
            />
          ) : (
            <span className="table-cell pl-4 text-right">
              {(base * (ratio / 100)).toFixed(0)}
            </span>
          )}
        </li>
      ))}
      <li className="table-row">
        <span className="table-cell"></span>
        <span className="table-cell"></span>
        <span className="table-cell border-t italic text-right">
          {total.toFixed(0)}
        </span>
      </li>
    </ul>
  );
};

function App() {
  const recipes = Object.values(Recipes);
  return (
    <HashRouter>
      <div className="bg-yellow-50 font-serif min-h-screen">
        <header className="bg-yellow-400 py-3">
          <nav className="px-9 mx-auto">
            <ul className="flex flex-row flex-wrap space-x-6 text-3xl">
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
