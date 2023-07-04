import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './calculator.css';

export function Display(props) {
  const { value } = props;
  return <div className="display">{value}</div>;
}

Display.propTypes = {
  value: PropTypes.string.isRequired,
};

export function Button(props) {
  const { value, type } = props;
  return (
    <button className={`button ${type}`} type="button">
      {value}
    </button>
  );
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Button.defaultProps = {
  type: '',
};

function Calculator() {
  const [displayValue] = useState('0');

  return (
    <div className="calculator">
      <Display value={displayValue} />
      <div className="row">
        <Button value="AC" type="clear" />
        <Button value="+/-" />
        <Button value="%" />
        <Button value="/" type="operator" />
      </div>
      <div className="row">
        <Button value="1" />
        <Button value="2" />
        <Button value="3" />
        <Button value="+" type="operator" />
      </div>
      <div className="row">
        <Button value="4" />
        <Button value="5" />
        <Button value="6" />
        <Button value="-" type="operator" />
      </div>
      <div className="row">
        <Button value="7" />
        <Button value="8" />
        <Button value="9" />
        <Button value="x" type="operator" />
      </div>
      <div className="row">
        <Button value="0" type="zero" />
        <Button value="." />
        <Button value="=" type="operator" />
      </div>
    </div>
  );
}

export default Calculator;
