import React, { useState } from "react";
import SingleQuestion from "./Components/Question";
import data from "./data.js";
const App = () => {
  const [questions, setquestion] = useState(data);
  return (
    <main>
      <div className="container">
        <h2>Question and answer about login</h2>
        <section className="info">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default App;
