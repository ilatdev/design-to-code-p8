import React from "react";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import BackgroundSVG from "./Components/Background";
import Slide from "./Components/Slide";
import EasyToUse from "./Components/Easytouse";
import Community from "./Components/Community";
import GetStarted from "./Components/GetStarted";

function App() {
  return (
    <>
      <Nav />
      <BackgroundSVG>
        <Hero />
      </BackgroundSVG>
      <Features />
      <Slide />
      <EasyToUse />
      <Community />
      <GetStarted />
    </>
  );
}

export default App;
