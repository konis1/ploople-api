import React, { useState, useId } from "react";
import DatePicker from "react-datepicker";
import BtnNext from "../components/btnNext";
import "react-datepicker/dist/react-datepicker.css";
import "../components/cardCategory.css";
import "./create-event-step1.css";

export default function CreateEventStep2() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
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
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
            />
          </div>
          <div>
            <label htmlFor={commentId}>
              Comment:
            </label>
            <textarea id={commentId} name="comment" rows="5"/>
          </div>
          <div>
            <BtnNext/>
          </div>
        </form>
      </div>
    </div>
  );
};
