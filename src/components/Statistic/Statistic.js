import React from 'react';
import PropTypes from 'prop-types';
import './statistic.css';

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className="statistic">
    <span>Good: {good}</span>
    <span>Neutral: {neutral}</span>
    <span>Bad: {bad}</span>
    <span>Total: {total}</span>
    <span>PositiveFeedback: {positivePercentage}%</span>
  </div>
);

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistic;
