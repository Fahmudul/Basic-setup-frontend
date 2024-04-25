import { useEffect, useState } from "react";
import "./App.css";
import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";

function App() {
  const loadeCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadeCoffees);
  return (
    <>
      <h1 className="text-6xl text-purple-600 text-center">
        Total Cofee {coffees.length}
      </h1>
      <div className="grid md:grid-cols-2 gap-4">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </>
  );
}

export default App;
