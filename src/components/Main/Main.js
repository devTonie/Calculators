import React, { useState } from "react";

import StandardCalculator from "../StandardCalculator/StandardCalculator";
import ScientificCalculator from "../ScientificCalculator/ScientificCalculator";
import CurrencyConverter from "../Converters/CurrencyConverter/CurrencyConverter";
import Temperature from "../Converters/Temperature/Temperature";
import Area from "../Converters/Area/Area";
import Energy from "../Converters/Energy/Energy";
import Time from "../Converters/Time/Time";
import Navigation from "../Navigation/Navigation";
import classes from "./Main.module.css";

const Main = () => {
  const [navigation, setNavigation] = useState("");

  const scientificClick = () => {
    setNavigation("Scientific");
  };

  const standardHandler = () => {
    setNavigation("Standard");
  };

  const currencyHandler = () => {
    setNavigation("Currency");
  };

  const areaHandler = () => {
    setNavigation("Area");
  };

  const temperatureHandler = () => {
    setNavigation("Temperature");
  };

  const energyHandler = () =>{
    setNavigation("Energy");
  }
  
  const timeHandler = () =>{
    setNavigation("Time");
  }

  return (
    <div className={classes.back}>
      <Navigation
        areaHandler={areaHandler}
        scientificClick={scientificClick}
        standardHandler={standardHandler}
        currencyHandler={currencyHandler}
        temperatureHandler={temperatureHandler}
        energyHandler={energyHandler}
        timeHandler={timeHandler}
      />
      {navigation === "Scientific" ? (
        <ScientificCalculator />
      ) : navigation === "Standard" ? (
        <StandardCalculator />
      ) : navigation === "Currency" ? (
        <CurrencyConverter />
      ) : navigation === "Area" ? (
        <Area/>
      ) : navigation === "Temperature" ? (
        <Temperature/>
      ) : navigation === "Energy" ? (
        <Energy/>
      ) : navigation === "Time" ? (
        <Time typeOfUnits='time' nameOfConverter='Time'/>
      ) : ''}
    </div>
  );
};

export default Main;
