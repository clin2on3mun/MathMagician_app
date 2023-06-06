import React from 'react';
import PropTypes from 'prop-types';

const Keypad = ({
  children, value, onclickBtn,
}) => <button type="button" onClick={onclickBtn} className={value}>{children}</button>;

Keypad.propTypes = {
  children: PropTypes.string,
  value: PropTypes.string,
  onclickBtn: PropTypes.func,
};

Keypad.defaultProps = {
  children: null,
  value: null,
  onclickBtn: null,
};

export default Keypad;
