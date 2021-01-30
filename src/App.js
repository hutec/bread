import "./App.css";
import Recipes from "./recipes";

const Step = ({ step }) => {
  const [title, description] = step;
  return (
    <div className="py-3 border-b-2">
      <h1 className="font-semibold text-xl underline">{title}</h1>
      <p className="pl-4 pt-2">{description}</p>
    </div>
  );
};

const TartineRecipe = () => {
  const steps = Object.entries(Recipes["Tartine"]["steps"]);
  return (
    <div>
      {steps.map((step) => (
        <Step key={step[0]} step={step} />
      ))}
    </div>
  );
};

function App() {
  return (
    <div className="bg-yellow-50 font-serif">
      <header className="bg-yellow-400">
        <nav className="w-7/12 mx-auto">
          <ul className="flex flex-row space-x-6 font-light text-3xl">
            <li>Bread</li>
            <li>Pizza</li>
          </ul>
        </nav>
      </header>
      <div className="w-7/12 mx-auto max-w-2xl mt-8">
        <TartineRecipe />
      </div>
    </div>
  );
}

export default App;
