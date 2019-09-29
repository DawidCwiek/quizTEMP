import React from 'react';
import PropTypes from 'prop-types';

function AnswerOption(props) {
  return (
    <li className="answerOption">
      <input
        type="radio"
        className="radioCustomButton"
        name="radioGroup"
        onChange={e => props.onAnswerSelected(e, props.types, props.answer)}
        id={props.answer}
      />
      <label className="radioCustomLabel" >
        {props.answer}
      </label>
    </li>
  );
}

export default AnswerOption;
