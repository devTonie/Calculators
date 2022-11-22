import React, { useState } from "react";

import Card from "../UI/Card/Card";
import Header from '../UI/Header/Header';
import ResultsForCalculate from "../UI/ResultsForCalculate/ResultsForCalculate";
import ScientificKeyboard from "../UI/Keyboards/ScientificKeyboard/ScientificKeyboard";
import History from '../UI/History/History';
import classes from "./ScientificCalculator.module.css";

const ScientificCalculator = (props) => {
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

      case "x!": {
        setFirst(parseInt(input));
        setOperation('factorial');
        break;
      }

      case "cos": {
        setOperation('cos');
        break;
      }

      case "sin": {
        setOperation('sin');
        break;
      }

      case "log": {
        setOperation("log");
        break;
      }

      case "ln": {
        setOperation("ln");
        break;
      }

      case "tan": {
        setOperation("tan");
        break;
      }

      case "√": {
        setOperation("√");
        break;
      }

      case "=": {
        switch (operation) {
          case "percent": {
            let second = parseInt(input);
            let answer = first % second;
            let history = `${first} % ${second} = ${answer}`;
            setHistory((oldArr) => [...oldArr, history]);
            setInput(answer);
            break;
          }

          case "√": {
            let value = parseInt(input);
            let answer = Math.sqrt(value);
            let history = `√${value} = ${answer}`;
            setHistory((oldArr) => [...oldArr, history]);
            setInput(answer);
            break;
          }

          case "tan": {
            let value = parseInt(input);
            let answer = Math.tan(value);
            let history = `cos(${value}) = ${answer}`;
            setHistory((oldArr) => [...oldArr, history]);
            setInput(answer);
            break;
          }

          case 'cos': {
            let value = parseInt(input);
            let answer = Math.cos(value);
            let history = `cos(${value}) = ${answer}`;
            setHistory((oldArr) => [...oldArr, history]);
            setInput(answer);
            break;
          }

          case 'ln': {
            let value = parseInt(input);
            let answer = Math.log10(value);
            let history = `ln(${value}) = ${answer}`;
            setHistory((oldArr) => [...oldArr, history]);
            setInput(answer);
            break;
          }

          case 'log': {
            let value = parseInt(input);
            let answer = Math.log(value);
            let history = `log(${value}) = ${answer}`;
            setHistory((oldArr) => [...oldArr, history]);
            setInput(answer);
            break;
          }

          case 'sin': {
            let value = parseInt(input);
            let answer = Math.sin(value);
            let history = `sin(${value}) = ${answer}`;
            setHistory((oldArr) => [...oldArr, history]);
            setInput(answer);
            break;
          }

          case "factorial": {
            let answer = Math.factorial(first);
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
      <Header>Scientific Calculator</Header>
      <ResultsForCalculate show={input} />
      <div className={classes.background}>
        <ScientificKeyboard onClick={inputHandler} />
      </div>
      <History history={history} />
    </Card>
  );
};

export default ScientificCalculator;
