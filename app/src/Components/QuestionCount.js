import React from 'react';
import PropTypes from 'prop-types';

function QuestionCount(props) {
  return (
    <div className="questionCount">
      Question <span>{props.counter + 1}</span> of <span>{props.total}</span>
    </div>
  );
}

export default QuestionCount;
