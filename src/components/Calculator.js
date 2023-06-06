import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Keypad from './Keypad';

const Calculator = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const clickBtn = (e) => {
    const result = calculate({ total, next, operation }, e.target.textContent);
    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);
  };

  return (
    <div className="calculator">
      <div className="display-screen">
        {total}
        {operation}
        {next}
      </div>
      <Keypad onclickBtn={clickBtn} value="btn grey">AC</Keypad>
      <Keypad onclickBtn={clickBtn} value="btn grey">+/-</Keypad>
      <Keypad onclickBtn={clickBtn} value="btn grey">%</Keypad>
      <Keypad onclickBtn={clickBtn} value="btn orange">÷</Keypad>
      <Keypad onclickBtn={clickBtn} value="btn grey">7</Keypad>
      <Keypad onclickBtn={clickBtn} value="btn grey">8</Keypad>
      <Keypad onclickBtn={clickBtn} value="btn grey">9</Keypad>
      <Keypad onclickBtn={clickBtn} value="btn orange">x</Keypad>
      <Keypad onclickBtn={clickBtn} value="btn grey">4</Keypad>
      <Keypad onclickBtn={clickBtn} value="btn grey">5</Keypad>
      <Keypad onclickBtn={clickBtn} value="btn grey">6</Keypad>
      <Keypad onclickBtn={clickBtn} value="btn orange">-</Keypad>
      <Keypad onclickBtn={clickBtn} value="btn grey">1</Keypad>
      <Keypad onclickBtn={clickBtn} value="btn grey">2</Keypad>
      <Keypad onclickBtn={clickBtn} value="btn grey">3</Keypad>
      <Keypad onclickBtn={clickBtn} value="btn orange">+</Keypad>
      <Keypad onclickBtn={clickBtn} value="btn big grey">0</Keypad>
      <Keypad onclickBtn={clickBtn} value="btn grey">.</Keypad>
      <Keypad onclickBtn={clickBtn} value="btn orange">=</Keypad>
    </div>
  );
};

export default Calculator;
