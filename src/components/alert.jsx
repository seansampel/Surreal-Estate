import React from 'react';
import '../styles/alert.css';
import PropTypes from 'prop-types';

const Alert = ({ message, success }) => {
  if (!message) return null;

  return (
    <div className={`Alert alert-${success ? 'success' : 'error'}`}>
      {message}
    </div>
  );
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  success: PropTypes.bool,
};
Alert.defaultProps = {
  success: false,
};

export default Alert;
