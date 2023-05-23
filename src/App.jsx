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
import PricingComponent from "./components/PricingComponent";
import { useTranslation } from "react-i18next";
// import router and switch
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Switch from "react-router-dom";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const { i18n } = useTranslation();

  function handleOpen() {
    // change previous state to opposite
    setIsOpen(!isOpen);
  }

  const isEnglish = i18n.language === "en";

  return (
    <div className="App">
      <Nav />
      <Hero />
      <Features />
      <Prompts />
      <PricingComponent />
      <ComingSoonCard />
      <CallToAction />
      {!isEnglish && <Contact />}
      {!isEnglish && <Policy />}
      {!isEnglish && <Regulamin />}
    </div>
  );
}

export default App;
