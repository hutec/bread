import "./App.css";
import Recipes from "./recipes";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

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

function App() {
  const recipes = Object.values(Recipes);
  return (
    <Router>
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
                <RecipeContent recipe={recipe} />
              </Route>
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
