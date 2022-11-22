import React, { useState, useEffect } from "react";

import Card from "../../UI/Card/Card";
import Header from "../../UI/Header/Header";
import InputsCard from "../ConvertersUI/InputsCard/InputsCard";
import convert from "convert-units";
import FlipButton from "../ConvertersUI/FlipButton/FlipButton";
import ConverterInput from "../ConvertersUI/ConverterInput/ConverterInput";

const Area = () => {  
  const [firstAmount, setFirstAmount] = useState(1);
  const [fromUnit, setFromUnit] = useState(convert().possibilities('area')[0]);
  const [toUnit, setToUnit] = useState(convert().possibilities('area')[2]);
  const [secondAmount, setSecondAmount] = useState(convert(firstAmount).from(fromUnit).to(toUnit));
  const [ flow, setFlow ] = useState('RtoL');

  useEffect(() => {
    if(flow === 'RtoL'){
      setSecondAmount(convert(firstAmount).from(fromUnit).to(toUnit));
    } else if(flow === 'LtoR'){
      setFirstAmount(convert(secondAmount).from(toUnit).to(fromUnit));
    }
  }, [secondAmount ,flow, firstAmount, fromUnit, toUnit])

  function onChangeFromProperty(value) {
    setFromUnit(value);
  }

  const onChangeToProperty = (value) => {
    setToUnit(value);
  };

  const onChangeFromAmountHandler = (event) => {
      setFlow('RtoL');
      setFirstAmount(event.target.value);
  }

  const onChangeToAmountHandler = event =>{
    setFlow('LtoR');
    setSecondAmount(event.target.value);
  }

  const flipButtonHandler = () =>{
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  }


  return (
    <Card>
      <Header>Area Converter</Header>

      <InputsCard>
        <ConverterInput
          values={convert().possibilities('area')}
          onChangeProperty={onChangeFromProperty}
          onChangeAmount={onChangeFromAmountHandler}
          amount={firstAmount}
          name='firstInput'
          value={fromUnit}
        />
        <FlipButton flipHandler={flipButtonHandler}/>
        <ConverterInput
          values={convert().possibilities('area')}
          onChangeProperty={onChangeToProperty}
          onChangeAmount={onChangeToAmountHandler}
          amount={secondAmount}
          defaultProperty={convert().possibilities('area')[1]}
          name='secondInput'
          value={toUnit}
        />
      </InputsCard>
    </Card>
  );
};

export default Area;
