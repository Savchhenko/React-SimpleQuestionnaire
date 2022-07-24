import React from "react";
import "./question-block.css";

const QuestionBlock = (props) => {
    return (
        <label className="question-block">
            {props.question}
            <input type="text" className="answer-input"></input>
        </label>
    );
};

export default QuestionBlock;
