import "./App.css";
import { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Prompts from "./components/Prompts";
import CallToAction from "./components/CallToAction";
import ComingSoonCard from "./components/ComingSoonCard";
import Policy from "./components/Policy";
import Contact from "./components/Contact";
import Regulamin from "./components/Regulamin";
// import router and switch
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Switch from "react-router-dom";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    // change previous state to opposite
    setIsOpen(!isOpen);
  }
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Features />
      <Prompts />
      <ComingSoonCard />
      <CallToAction />
      <Contact />
      <Policy />
      <Regulamin />
    </div>
  );
}

export default App;
