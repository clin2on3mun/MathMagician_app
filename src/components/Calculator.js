import React from 'react';


const TableCalculator = () => (
  <div className="calculator">
    <span className="display-screen">0</span>
    <span className="btn grey">AC</span>
    <span className="btn grey">+/-</span>
    <span className="btn grey">%</span>
    <span className="btn orange">&divide;</span>
    <span className="btn grey">7</span>
    <span className="btn grey">8</span>
    <span className="btn grey">9</span>
    <span className="btn orange">&times;</span>
    <span className="btn grey">4</span>
    <span className="btn grey">5</span>
    <span className="btn grey">6</span>
    <span className="btn orange">&minus;</span>
    <span className="btn grey">1</span>
    <span className="btn grey">2</span>
    <span className="btn grey">3</span>
    <span className="btn orange">+</span>
    <span className="btn big grey">0</span>
    <span className="btn grey">.</span>
    <span className="btn orange">=</span>
  </div>
);
const Calculator = () => (
  <TableCalculator />
);
export default Calculator;
