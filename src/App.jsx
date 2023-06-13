import React from "react";

import "./App.css";


import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Company from "./components/Company/Company";
import Residence from "./components/Residence/Residence";
import Total from "./components/Total/Total";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="App">
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Company />
      <Residence />
      <Total />
      <Contact />
      <GetStarted />
      <Footer />


      
    </>
  );
}

export default App;
