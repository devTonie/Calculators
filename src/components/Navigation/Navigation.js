import React from "react";

import CalculateIcon from "@mui/icons-material/Calculate";
import AddIcon from '@mui/icons-material/Add';
import ScienceIcon from '@mui/icons-material/Science';
import BarChartIcon from '@mui/icons-material/BarChart';
import TerminalIcon from '@mui/icons-material/Terminal';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import BoltIcon from '@mui/icons-material/Bolt';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import CropIcon from '@mui/icons-material/Crop';
import MenuButton from "../UI/MenuButton/MenuButton";
import classes from "./Navigation.module.css";

const Navigation = props => {

  const scientificHandler = () =>{
    props.scientificClick();
  }

  const standardHandler = () =>{
    props.standardHandler();
  }

  const currencyHandler = () =>{
    props.currencyHandler();
  }

  const areaHandler = () =>{
    props.areaHandler();
  }

  const temperatureHandler = () =>{
    props.temperatureHandler();
  }

  const energyHandler = () =>{
    props.energyHandler();
  }

  const timeHandler = () =>{
    props.timeHandler();
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.logo}>
        <CalculateIcon className={classes.icon} />
        <h1>Calculator</h1>
      </div>

      <div className={classes.calculators}>
      <h2>Calculators</h2>
        <MenuButton icon={<AddIcon />} onClick={standardHandler}>Standard</MenuButton>
        <MenuButton icon={<ScienceIcon />} onClick={scientificHandler}>Scientific</MenuButton>
        <MenuButton icon={<BarChartIcon />}>Graphing</MenuButton>
        <MenuButton icon={<TerminalIcon />}>Programmer</MenuButton>
        <MenuButton icon={<CalendarMonthIcon />}>Date Calculator</MenuButton>
      </div>

      <div className={classes.calculators}>
      <h2>Convertors</h2>
        <MenuButton icon={<MonetizationOnIcon />} onClick={currencyHandler}>Currency</MenuButton>
        <MenuButton icon={<CropIcon />} onClick={areaHandler}>Area</MenuButton>
        <MenuButton icon={<DeviceThermostatIcon />} onClick={temperatureHandler}>Temperature</MenuButton>
        <MenuButton icon={<BoltIcon />} onClick={energyHandler}>Energy</MenuButton>
        <MenuButton icon={<QueryBuilderIcon />} onClick={timeHandler}>Time</MenuButton>
      </div>
    </div>
  );
};

export default Navigation;
