import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      setInput(evaluate(input).toString());
    } catch {
      setInput('Error');
    }
  };

  return (
    <div className="min-h-screen bg-lightblue flex items-center justify-center">
      <div className="calculator-container">
        <div className="mb-4 text-right text-2xl">{input}</div>
        <div className="grid grid-cols-4 gap-2">
          <button className="btn btn-number" onClick={() => handleClick('1')}>1</button>
          <button className="btn btn-number" onClick={() => handleClick('2')}>2</button>
          <button className="btn btn-number" onClick={() => handleClick('3')}>3</button>
          <button className="btn btn-c" onClick={handleClear}>C</button>
          <button className="btn btn-number" onClick={() => handleClick('4')}>4</button>
          <button className="btn btn-number" onClick={() => handleClick('5')}>5</button>
          <button className="btn btn-number" onClick={() => handleClick('6')}>6</button>
          <button className="btn btn-operator" onClick={() => handleClick('/')}>/</button>
          <button className="btn btn-number" onClick={() => handleClick('7')}>7</button>
          <button className="btn btn-number" onClick={() => handleClick('8')}>8</button>
          <button className="btn btn-number" onClick={() => handleClick('9')}>9</button>
          <button className="btn btn-operator" onClick={() => handleClick('*')}>*</button>
          <button className="btn btn-number" onClick={() => handleClick('.')}>.</button>
          <button className="btn btn-number" onClick={() => handleClick('0')}>0</button>
          <button className="btn btn-operator" onClick={() => handleClick('+')}>+</button>
          <button className="btn btn-operator" onClick={() => handleClick('-')}>-</button>
          <button className="btn btn-equal col-span-4" onClick={handleCalculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
