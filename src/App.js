import "./App.css";
import React, { useState, useEffect } from "react";

import questionsData from "./questionsList.json";
import QABlock from "./components/qa-block";

function App() {
    const [questionsList, setQuestionsList] = useState(null);
    const [answers, setAnswers] = useState([]);
    let inputElems = []; //the variable for all form's input elements

    useEffect(() => {
        setQuestionsList(questionsData[0]); //save JSON data for rendering questions
    }, []);

    const { questions } = questionsList ?? {};

    const handleSubmit = (event) => {
        event.preventDefault();
        inputElems = document.querySelectorAll(".answer-input");
        console.log('Submit button was clicked');
        [...inputElems].forEach((elem) => {
            setAnswers(prevValues => [...prevValues, {
                id: prevValues.length + 1,
                question: elem.closest(".qa-block").innerText,
                answer: elem.value
            }]);
        });
    };
    
    useEffect(() => {
        console.log("User answers: ", answers);
        if (answers.length > 0) {
            localStorage.setItem('answers', JSON.stringify(answers)); //save user's answers to LocalStorage
        }
    }, [answers]);

    return (
        <main>
            <form className="main-container" onSubmit={handleSubmit}>
                {
                    questions ? questions.map(({question, id}) => <QABlock key={id} question={question} />) : null
                }
                <button>Отправить</button>
            </form>
        </main>
    );
}

export default App;
