import React, { useState, useId } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../components/cardCategory.css";
import "./create-event-step1.css";

export default function CreateEventStep2({handleClick, changeComment, changeDate}) {
  const [startDate, setStartDate] = useState(new Date());
  const [textArea, setTextArea] = useState("");
  const onChange = (date) => {
    changeDate(date);
  };
  const commentId = useId();

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
              id={commentId}
              name="comment"
              rows={5}
              onChange = {(e) => {
                changeComment(e.target.value);
              }}
              />
          </div>
          <div>
            <button className="form__button btn--sea btn--no-border btn--shadow" onClick={ handleClick }  > Suivant</button>
          </div>
        </form>
      </div>
    </div>
  );
};
