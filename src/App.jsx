import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Prompts from "./components/Prompts";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Features />
      <Prompts />

      {/* wrap content above to be within container but have full width backgorund */}
    </div>
  );
}

export default App;
