import React, { useState } from 'react';
import data from './data';
import Question from './Question';
import SingleQuestion from './Question';
function App() {
  return (
    <main>
      <div className="container">
        <h3>Questions and answers about login</h3>
        <ul className="header">
          {data.map((question) => {
            return (
              <Question
                text={question.title}
                info={question.info}
                {...question}
              />
            );
          })}
        </ul>
      </div>
    </main>
  );
}

export default App;
