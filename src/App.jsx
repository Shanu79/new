import React from "react";
import CardsList from "./components/CardsList";
import Navbar from "./components/navbar/Navbar"

const App = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <CardsList />
    </div>
  );
};

export default App;
