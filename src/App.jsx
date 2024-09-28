import React from "react";
import Header from "./sections/header";
import Hero from "./sections/Hero";
import Feature from "./sections/Feature";
import Pricing from "./sections/Pricing";
import Faq from "./sections/Faq";
import Download from "./sections/Download";
import Testimonials from "./sections/Testimonials";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Feature />
      <Pricing />
      <Faq/>
      <Download/>
      <Testimonials />
    </main>
  );
};

export default App;
