import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/calculator.css';
import calculate from '../logic/calculate';

export function Display(props) {
  const { value } = props;
  return <div className="display">{value}</div>;
}

Display.propTypes = {
  value: PropTypes.string.isRequired,
};

export function Button(props) {
  const { value, type, onClick } = props;
  return (
    <button className={`button ${type}`} type="button" onClick={onClick}>
      {value}
    </button>
  );
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  type: '',
};

function Calculator() {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  function handleClick(buttonName) {
    setCalculatorData((prevState) => calculate(prevState, buttonName));
  }

  const { total, next } = calculatorData;
  const displayValue = next || total || '0';

  return (
    <div className="calculator-wrapper">
      <h2 className="title">Let is do some Math!</h2>
      <div className="calculator">
        <Display value={displayValue} />
        <div className="row">
          <Button value="AC" type="clear" onClick={() => handleClick('AC')} />
          <Button value="+/-" onClick={() => handleClick('+/-')} />
          <Button value="%" onClick={() => handleClick('%')} />
          <Button value="÷" type="operator" onClick={() => handleClick('÷')} />
        </div>
        <div className="row">
          <Button value="1" onClick={() => handleClick('1')} />
          <Button value="2" onClick={() => handleClick('2')} />
          <Button value="3" onClick={() => handleClick('3')} />
          <Button value="+" type="operator" onClick={() => handleClick('+')} />
        </div>
        <div className="row">
          <Button value="4" onClick={() => handleClick('4')} />
          <Button value="5" onClick={() => handleClick('5')} />
          <Button value="6" onClick={() => handleClick('6')} />
          <Button value="-" type="operator" onClick={() => handleClick('-')} />
        </div>
        <div className="row">
          <Button value="7" onClick={() => handleClick('7')} />
          <Button value="8" onClick={() => handleClick('8')} />
          <Button value="9" onClick={() => handleClick('9')} />
          <Button value="x" type="operator" onClick={() => handleClick('x')} />
        </div>
        <div className="row">
          <Button value="0" type="zero" onClick={() => handleClick('0')} />
          <Button value="." onClick={() => handleClick('.')} />
          <Button value="=" type="operator" onClick={() => handleClick('=')} />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
