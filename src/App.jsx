import React from "react";
import Header from "./sections/header";
import Hero from "./sections/Hero";
import Feature from "./sections/Feature";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Feature />
    </main>
  );
};

export default App;
