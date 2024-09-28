import React from "react";
import Header from "./sections/header";
import Hero from "./sections/Hero";
import Feature from "./sections/Feature";
import Pricing from "./sections/Pricing";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Feature />
      <Pricing />
    </main>
  );
};

export default App;
