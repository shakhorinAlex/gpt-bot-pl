import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Prompts from "./components/Prompts";
import CallToAction from "./components/CallToAction";
import ComingSoonCard from "./components/ComingSoonCard";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Features />
      <Prompts />
      <ComingSoonCard />
      <CallToAction />
    </div>
  );
}

export default App;
