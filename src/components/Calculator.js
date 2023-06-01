import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Quotes from './quotes';

const TableCalculator = () => {
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
    <>
      <div className="display-screen">
        {total}
        {operation}
        {next}
      </div>
      <button type="button" onClick={clickBtn} className="btn grey">AC</button>
      <button type="button" onClick={clickBtn} className="btn grey">+/-</button>
      <button type="button" onClick={clickBtn} className="btn grey">%</button>
      <button type="button" onClick={clickBtn} className="btn orange">÷</button>
      <button type="button" onClick={clickBtn} className="btn grey">7</button>
      <button type="button" onClick={clickBtn} className="btn grey">8</button>
      <button type="button" onClick={clickBtn} className="btn grey">9</button>
      <button type="button" onClick={clickBtn} className="btn orange">x</button>
      <button type="button" onClick={clickBtn} className="btn grey">4</button>
      <button type="button" onClick={clickBtn} className="btn grey">5</button>
      <button type="button" onClick={clickBtn} className="btn grey">6</button>
      <button type="button" onClick={clickBtn} className="btn orange">-</button>
      <button type="button" onClick={clickBtn} className="btn grey">1</button>
      <button type="button" onClick={clickBtn} className="btn grey">2</button>
      <button type="button" onClick={clickBtn} className="btn grey">3</button>
      <button type="button" onClick={clickBtn} className="btn orange">+</button>
      <button type="button" onClick={clickBtn} className="btn big grey">0</button>
      <button type="button" onClick={clickBtn} className="btn grey">.</button>
      <button type="button" onClick={clickBtn} className="btn orange">=</button>
    </>
  );
};
const Calculator = () => (

  <div className="container">
    <div className="calculator"><TableCalculator /></div>
    <Quotes />
  </div>

);
export default Calculator;
