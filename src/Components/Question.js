import React, { useState } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
const SingleQuestion = ({ title, info }) => {
  const [showinfo, setshowinfo] = useState(false);
  return (
    <article className="question">
      <header>
        <h3>{title}</h3>
        <button className='btn'  onClick={() => setshowinfo(!showinfo)}>
          {showinfo ? <AiOutlinePlusCircle /> : <AiOutlineMinusCircle />}
        </button>
      </header>
      {showinfo && <p>{info}</p>}
    </article>
  );
};

export default SingleQuestion;
