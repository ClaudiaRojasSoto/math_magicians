import React from 'react';
import './calculator.css';

function Calculator() {
  return (
    <div className="calculator">
      <div className="display">0</div>
      <div className="row">
        <button className="button clear" type="button">AC</button>
        <button className="button" type="button">+/-</button>
        <button className="button" type="button">%</button>
        <button className="button operator" type="button">/</button>
      </div>
      <div className="row">
        <button className="button" type="button">1</button>
        <button className="button" type="button">2</button>
        <button className="button" type="button">3</button>
        <button className="button operator" type="button">+</button>
      </div>
      <div className="row">
        <button className="button" type="button">4</button>
        <button className="button" type="button">5</button>
        <button className="button" type="button">6</button>
        <button className="button operator" type="button">-</button>
      </div>
      <div className="row">
        <button className="button" type="button">7</button>
        <button className="button" type="button">8</button>
        <button className="button" type="button">9</button>
        <button className="button operator" type="button">x</button>
      </div>
      <div className="row">
        <button className="button" type="button">0</button>
        <button className="button" type="button">+</button>
        <button className="button operator" type="button">=</button>
      </div>
    </div>
  );
}

export default Calculator;
