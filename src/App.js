import "./App.css";
import questionsList from "./questionsList.js";
import QuestionBlock from "./question-block";

function App() {
  return (
    <main className="main-container">
      {
        questionsList.map(({question, id}) => (
          <QuestionBlock key={id} question={question}/>
        ))
      }
    </main>
  );
}

export default App;
