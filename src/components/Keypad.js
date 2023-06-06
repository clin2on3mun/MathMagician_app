import React from 'react';
import PropTypes from 'prop-types';

const Keypad = ({ children, value, onclickBtn, typeBtn }) => <button type={typeBtn} onClick={onclickBtn} className={value}>{children}</button>;

Keypad.propTypes = {
  children: PropTypes.string,
  value: PropTypes.string,
  onclickBtn: PropTypes.func,
  typeBtn:PropTypes.string
};

Keypad.defaultProps = {
  children: null,
  value: null,
  onclickBtn: null,
  typeBtn: null,
};

export default Keypad;
