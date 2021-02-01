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

  return (
    <div className="border shadow-md rounded-md w-1/2 min-w-max mx-auto p-2">
      <ul className="table mt-2">
        <li className="table-row">
          <span className="table-cell border-b border-r"></span>
          <span className="table-cell pl-4 border-b font-semibold">Percentage</span>
          <span className="table-cell pl-4 border-b font-semibold">Weight</span>
        </li>
        {Object.entries(ratios).map(([ingredient, ratio]) => (
          <li key={ingredient} className="table-row">
            <span className="table-cell font-semibold text-right border-r pr-2">
              {ingredient}
            </span>

            {ingredient !== "Flour" ? (
              <input
                className="table-cell text-right w-20 bg-yellow-50 float-right"
                type="number"
                value={ratio}
                onChange={(e) =>
                  updateRatios(ratios, ingredient, e.target.value, setRatios)
                }
              />
            ) : (
              <span className="table-cell pl-4 text-right">{ratio} %</span>
            )}
            {ingredient === "Flour" ? (
              <input
                className="table-cell text-right w-20 bg-yellow-50 float-right"
                type="number"
                value={base}
                onChange={(e) => setBase(e.target.value)}
              />
            ) : (
              <span className="table-cell pl-4 text-right">
                {(base * (ratio / 100)).toFixed(0)}g
              </span>
            )}
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
