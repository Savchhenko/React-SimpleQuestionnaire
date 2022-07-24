import React from "react";
import "./qa-block.css";

const QABlock = (props) => {
    return (
        <label className="qa-block">
            {props.question}
            <input type="text" className="answer-input"></input>
        </label>
    );
};

export default QABlock;
