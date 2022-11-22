import React, { useEffect, useState } from "react";

import Header from "../../UI/Header/Header";
import InputsCard from "../ConvertersUI/InputsCard/InputsCard";
import FlipButton from "../ConvertersUI/FlipButton/FlipButton";
import ConverterInput from "../ConvertersUI/ConverterInput/ConverterInput";
import Card from "../../UI/Card/Card";

const CurrencyConverter = () => {
  const [currency, setCurrency] = useState([]);
  const [ firstQuantity, setFirstQuantity ] = useState('USD');
  const [ secondQuantity, setSecondQuantity ] = useState('EUR');
  const [ firstAmount, setFirstAmount ] = useState(0);
  const [ secondAmount, setSecondAmount ] = useState(0);
  const [ flow, setFlow] = useState('RtoL');

  //5664f4317302da19476235c0
  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/5664f4317302da19476235c0/latest/${firstQuantity}`
    )
      .then((response) => response.json())
      .then((data) => setCurrency(data.conversion_rates));
  }, []);


  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/5664f4317302da19476235c0/latest/${firstQuantity}`
    )
      .then((response) => response.json())
      .then((data) => setCurrency(data.conversion_rates));
  }, [firstQuantity]);

  useEffect(() => {
    if(flow === 'RtoL'){
      fetch(
        `https://v6.exchangerate-api.com/v6/5664f4317302da19476235c0/latest/${firstQuantity}`
      )
        .then((response) => response.json())
        .then((data) => setCurrency(data.conversion_rates));
      setSecondAmount(firstAmount * currency[`${secondQuantity}`]);
    } else if(flow === 'LtoR'){
      fetch(
        `https://v6.exchangerate-api.com/v6/5664f4317302da19476235c0/latest/${secondQuantity}`
      )
        .then((response) => response.json())
        .then((data) => setCurrency(data.conversion_rates));
      setFirstAmount(secondAmount * currency[`${firstQuantity}`]);
    }
  }, [firstAmount, secondQuantity, firstQuantity, secondAmount]);

  const onChangeFirstQuantity = value =>{
    setFirstQuantity(value);
  }
  
  const onChangeSecondQuantity = value =>{
    setSecondQuantity(value);
  }

  const onChangeFirstAmount = event =>{
    setFlow('RtoL');
    setFirstAmount(event.target.value);
  }

  const onChangeSecondAmount = event =>{
    setFlow('LtoR');
    setSecondAmount(event.target.value);
  }

  const flipHandler = () =>{
    setSecondQuantity(firstQuantity);
    setFirstQuantity(secondQuantity);
  }

  

  return (
    <Card>
      <Header>Currency Converter</Header>
      <InputsCard>
        <ConverterInput 
        values={Object.keys(currency)} 
        onChangeProperty={onChangeFirstQuantity}
        onChangeAmount={onChangeFirstAmount}
        amount={firstAmount}
        value={firstQuantity}
        />
        <FlipButton flipHandler={flipHandler}/>
        <ConverterInput 
        values={Object.keys(currency)} 
        onChangeProperty={onChangeSecondQuantity}
        onChangeAmount={onChangeSecondAmount}
        amount={secondAmount}
        value={secondQuantity}
        />
      </InputsCard>
    </Card>
  );
};

export default CurrencyConverter;
