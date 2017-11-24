import React from 'react';
import PropTypes from 'prop-types';

const errorStyle = {
  float: 'right',
  marginTop: '10px',
  color: '#f8c512'
};

export const FieldError = ({id, error}) => {
  if (error.length > 0) {
    return (
      <p key={id} style={errorStyle}>
        {error}
      </p>
    );
  }
  return null;
};

FieldError.propTypes = {
  id: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
};