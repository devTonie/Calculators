import React, { useState, useEffect } from "react";
import convert from "convert-units";

import Card from "../../UI/Card/Card";
import Header from "../../UI/Header/Header";
import InputsCard from "../ConvertersUI/InputsCard/InputsCard";
import ConverterInput from "../ConvertersUI/ConverterInput/ConverterInput";
import FlipButton from "../ConvertersUI/FlipButton/FlipButton";

const Time = () => {
  const [firstInput, setFirstInput] = useState(1);
  const [fromUnit, setFromUnit] = useState(
    convert().possibilities('time')[0]
  );
  const [toUnit, setToUnit] = useState(convert().possibilities("time")[2]);
  const [secondInput, setSecondInput] = useState(
    convert(firstInput).from(fromUnit).to(toUnit)
  );
  const [flow, setFlow] = useState('RtoL');

  useEffect(() => {
    if(flow === 'RtoL'){
      setSecondInput(convert(firstInput).from(fromUnit).to(toUnit));
    } else if(flow === 'LtoR'){
      setFirstInput(convert(secondInput).from(toUnit).to(fromUnit));
    }
  }, [secondInput ,flow, firstInput, fromUnit, toUnit])


  const onChangeFromPropperty = (value) => {
    if(toUnit === value){
      setFromUnit(toUnit);
      setToUnit(fromUnit);
      return;
    }
    setFromUnit(value);
  };

  const onChangeToProperty = (value) => {
    if(fromUnit === value){
      setFromUnit(toUnit);
      setToUnit(fromUnit);
      return;
    }
    setToUnit(value);
  };

  const onChangeFromAmountHandler = (event) => {
    setFirstInput(event.target.value);
    setFlow("RtoL");
  };

  const onChangeToAmountHandler = (event) => {
    setSecondInput(event.target.value);
    setFlow("LtoR");
  };

  const flipButtonHandler = () =>{
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  }

  return (
    <Card>
      <Header>Temperature Converter</Header>
      <InputsCard>
        <ConverterInput
          values={convert().possibilities("time")}
          onChangeProperty={onChangeFromPropperty}
          onChangeAmount={onChangeFromAmountHandler}
          amount={firstInput}
          value={fromUnit}
        />
        <FlipButton flipHandler={flipButtonHandler}/>
        <ConverterInput
          values={convert().possibilities("time")}
          onChangeProperty={onChangeToProperty}
          onChangeAmount={onChangeToAmountHandler}
          amount={secondInput}
          defaultProperty={toUnit}
          value={toUnit}
        />
      </InputsCard>
    </Card>
  );
};

export default Time;
