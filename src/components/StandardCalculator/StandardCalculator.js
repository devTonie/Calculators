import React, { useState } from "react";

import Card from "../UI/Card/Card";
import Header from '../UI/Header/Header';
import ResultsForCalculate from "../UI/ResultsForCalculate/ResultsForCalculate";
import StandardKeyboard from "../UI/Keyboards/StandardKeyboard/StandardKeyboard";
import History from "../UI/History/History";
import classes from "./StandardCalculator.module.css";

const StandardCalculator = () => {
  const inititalArr = [];
  const [input, setInput] = useState("");
  const [first, setFirst] = useState();
  const [history, setHistory] = useState(inititalArr);
  const [operation, setOperation] = useState("");

  const inputHandler = (item) => {
    switch (item) {
      case "AC": {
        setInput("");
        break;
      }

      case "Del": {
        let updatedStr = input.slice(0, -1);
        setInput(updatedStr);
        break;
      }

      case "%": {
        setFirst(parseInt(input));
        setInput("");
        setOperation("percent");
        break;
      }

      case "*": {
        setFirst(parseInt(input));
        setInput("");
        setOperation("multiply");
        break;
      }

      case "/": {
        setFirst(parseInt(input));
        setInput("");
        setOperation("decide");
        break;
      }

      case "+": {
        setFirst(parseInt(input));
        setInput("");
        setOperation("plus");
        break;
      }

      case "-": {
        setFirst(parseInt(input));
        setInput("");
        setOperation("minus");
        break;
      }

      case "=": {
        switch (operation) {
          case "percent": {
            let second = parseInt(input);
            let answer = first % second;
            let histor = `${first} % ${second} = ${answer}`;
            setHistory((oldArr) => [...oldArr, histor]);
            setInput(answer);
            break;
          }
          case "minus": {
            let second = parseInt(input);
            let answer = first - second;
            let histor = `${first} - ${second} = ${answer}`;
            setHistory((oldArr) => [...oldArr, histor]);
            setInput(answer);
            break;
          }
          case "plus": {
            let second = parseInt(input);
            let answer = first + second;
            let histor = `${first} + ${second} = ${answer}`;
            setHistory((oldArr) => [...oldArr, histor]);
            setInput(answer);
            break;
          }
          case "multiply": {
            let second = parseInt(input);
            let answer = first * second;
            let histor = `${first} * ${second} = ${answer}`;
            setHistory((oldArr) => [...oldArr, histor]);
            setInput(answer);
            break;
          }
          case "decide": {
            let second = parseInt(input);
            let answer = first / second;
            let histor = `${first} / ${second} = ${answer}`;
            setHistory((oldArr) => [...oldArr, histor]);
            setInput(answer);
            break;
          }
          default: {
            setInput(0);
            break;
          }
        }
        return;
      }

      default: {
        let value = item;
        setInput(input + value);
      }
    }
  };

  return (
    <Card>
      <Header>Standard Calculator</Header>
      <ResultsForCalculate show={input} />
      <div className={classes.background}>
        <StandardKeyboard className={classes.grid} onClick={inputHandler} />
      </div>
      <History history={history} />
    </Card>
  );
};

export default StandardCalculator;
