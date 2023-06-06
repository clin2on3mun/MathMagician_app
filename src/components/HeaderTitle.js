import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ title, value }) => <h2 className={value}>{title}</h2>;

Title.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
};

Title.defaultProps = {
  title: null,
  value: null,

};

export default Title;
