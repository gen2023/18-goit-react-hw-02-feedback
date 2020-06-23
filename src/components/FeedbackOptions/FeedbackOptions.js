import React from 'react';
import PropTypes from 'prop-types';
import './feedbackOptions.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(type => (
        <button
          className="button"
          key={type}
          type="button"
          onClick={() => onLeaveFeedback(type)}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
