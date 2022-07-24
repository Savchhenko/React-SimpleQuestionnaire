import "./App.css";
import React, { useState, useEffect } from "react";

import questionsList from "./questionsList.json";
import QABlock from "./components/qa-block";

function App() {
    const [answers, setAnswers] = useState(null);

    useEffect(() => {
        setAnswers(questionsList[0]);
        console.log(answers);
    }, []);

    const { questions } = answers ?? {};

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Btn was clicked");
    };
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
