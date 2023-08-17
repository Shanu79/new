import React from "react";
import CardsList from "./components/CardsList";
import Header from "./components/Header";
import Navbar from "./components/navbar/Navbar"
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Header />
      <CardsList />
    </div>
  );
};

export default App;
