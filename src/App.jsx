import React, { useState } from 'react';
import './App.css';

function App() {
  const [expression, setExpression] = useState('');
  const [display, setDisplay] = useState('');

  const appendNumber = (number) => {
    setExpression(prev => prev + number);
    setDisplay(prev => prev + number);
  };

  const setOperator = (op) => {
    setExpression(prev => prev + op);
    setDisplay(prev => prev + op);
  };

  const clearDisplay = () => {
    setExpression('');
    setDisplay('');
  };

  const calculateResult = () => {
    if (expression !== '') {
      try {
        const result = eval(expression);
        const falsifiedResult = falsifyResult(result);
        setDisplay(expression + '=' + falsifiedResult);
        setExpression(falsifiedResult.toString());
      } catch (error) {
        setDisplay('Error');
        setExpression('');
      }
    }
  };

  const falsifyResult = (result) => {
    return result + Math.floor(Math.random() * 200) - 50;
  };

  return (
    <div className="app">
      <h1>WRONG MATH</h1>
      <div className="moto">
        <p> This is a wrong calculator designed to let you relax from mathematical precision and rules. Let's allow the numbers to go a bit <b><i>crazy</i></b>!</p>
      </div>
      <div className="calculator">
        <input type="text" id="display" value={display} readOnly />
        <br />
        <button onClick={() => appendNumber('1')}>1</button>
        <button onClick={() => appendNumber('2')}>2</button>
        <button onClick={() => appendNumber('3')}>3</button>
        <button onClick={() => setOperator('+')} className="colorbtn"><b>+</b></button>
        <br />
        <button onClick={() => appendNumber('4')}>4</button>
        <button onClick={() => appendNumber('5')}>5</button>
        <button onClick={() => appendNumber('6')}>6</button>
        <button onClick={() => setOperator('-')} className="colorbtn"><b>-</b></button>
        <br />
        <button onClick={() => appendNumber('7')}>7</button>
        <button onClick={() => appendNumber('8')}>8</button>
        <button onClick={() => appendNumber('9')}>9</button>
        <button onClick={() => setOperator('*')} className="colorbtn"><b>*</b></button>
        <br />
        <button onClick={() => appendNumber('0')}>0</button>
        <button onClick={clearDisplay} className="c-button">C</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={() => setOperator('/')} className="colorbtn"><b>/</b></button>
      </div>
    </div>
  );
}

export default App;