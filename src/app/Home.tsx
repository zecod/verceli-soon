import React from "react";
import { Hero } from "./components/hero/Hero";
import NavBar from "./components/NavBar";

const Home = () => {
  return (
    <div className="container">
      <NavBar />
      <Hero />
    </div>
  );
};

export default Home;
