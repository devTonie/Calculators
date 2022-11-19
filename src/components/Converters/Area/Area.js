import React, { useEffect, useState } from 'react';

import Card from '../../UI/Card/Card';
import ButtonConverter from '../ConvertersUI/ButtonConverter/ButtonConverter';
import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle';
import ConverterInput from '../ConvertersUI/ConverterInput/ConverterInput';
import classes from './Area.module.css';

const Area = () => {
  const [ firstAmount, setFirstAmount ] = useState();
  const [ secondAmount, setSecondAmount ] = useState();
  const [ fromUnit, setFromUnit ] = useState();
  const [ toUnit, setToUnit ] = useState();
  const units = [
    'square meter (m^2)',
    'square kilometer (km^2)',
    'square centimeter (cm^2)',
    'square millimeter (mm^2)',
    'hectare (ha)',
    'acre (ac)',
    'square mile (mi^2)',
    'square yard (yd^2)',
    'square foot (ft^2)',
    'square inch (in^2)',
  ];


  function onChangeFromProperty(value) {
    setFromUnit(value);
  }

  const onChangeToProperty = value =>{
    setToUnit(value);
  }

  const onChangeFromAmountHandler = value =>{
    setFirstAmount(value);
    onChangeToAmountHandler(firstAmount);
  }
  
  const onChangeToAmountHandler = value =>{
    setSecondAmount(value);
  }

  return <Card>
    <h1 className={classes.head}>Area Converter</h1>

    <div className={classes.wrapper}>
        <ConverterInput values={units} className={classes.firstInput} label='From:' placeholder='Amount...' onChangeProperty={onChangeFromProperty} onChangeAmount={onChangeFromAmountHandler} value={firstAmount}/>
      <div className={classes.center}>
        <SwapHorizontalCircleIcon />
      </div>
        <ConverterInput values={units} label='To:' placeholder='Amount...' onChangeProperty={onChangeToProperty} onChangeAmount={onChangeToAmountHandler} value={secondAmount}/>
    </div>
  </Card >
}

export default Area;