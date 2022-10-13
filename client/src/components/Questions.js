import React from 'react';

const Questions = (props) => {
  return (
    <div>
        <div className="question bg-secondary text-white-50 text-center">
            <h1 className="text-center">{props.triviaData.question}</h1>
        </div>
    </div>
  );
};

export default Questions;
