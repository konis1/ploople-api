import React, { useState, useId, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../components/cardCategory.css";
import "./create-event-step1.css";

export default function CreateEventStep2({handleClick}) {
  const [startDate, setStartDate] = useState(new Date());
  const onChange = (date) => {
    setStartDate(date);
  };
  const commentId = useId();
  const textAreaRef = useRef("");

  return (
    <div className="wrapper">
      <div className="home-container text-center">
        <form>
          <div className="steps">
            <h1 className="steps--title">2 - Choose the date</h1>
          </div>
          <div>
            <DatePicker
            selected={startDate}
            onChange={onChange}
            inline
            />
          </div>
          <div>
            <label htmlFor={commentId}>
              Comment:
            </label>
            <textarea
            ref = {textAreaRef}
            id={commentId}
            name="comment"
            rows={5}/>
          </div>
          <div>
            <button className="form__button btn--sea btn--no-border btn--shadow"  > Suivant</button>
          </div>
        </form>
      </div>
    </div>
  );
};
