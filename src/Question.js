import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = (props) => {
  const [extended, setExtended] = useState(false);

  const extend = () => {
    setExtended(() => {
      return !extended;
    });
  };

  return (
    <>
      <div className="question">
        <h4>{props.text}</h4>
        <button className="btn" onClick={extend}>
          {extended ? '-' : '+'}
        </button>
        {extended ? <p>{props.info}</p> : null}
      </div>
    </>
  );
};

export default Question;
