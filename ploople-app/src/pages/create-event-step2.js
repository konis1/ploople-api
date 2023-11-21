import React, { useId } from "react";
import DatePicker from "react-datepicker";
import Steps from "../components/steps";
import "react-datepicker/dist/react-datepicker.css";
import "../components/cardCategory.css";
import "./create-event-step1.css";

export default function CreateEventStep2({ nextStep, previousStep, change, formData, actualStep }) {

  const commentId = useId();

  return (
    <div className="wrapper">
      <div className="home-container text-center">
        <form>
          <Steps actualStep = {actualStep + 1}/>
          <div>
            <DatePicker
              selected={ formData.date_start }
              onChange={ (e) => {
                change(e,"date");
              }}
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
              value = { formData.comment }
              onChange = {(e) => {
                change(e.target.value,e.target.name);
              }}
            />
          </div>
          <div>
            <button className="form__button btn--sea btn--no-border btn--shadow" onClick={ previousStep }  > Previous </button>
            <button className="form__button btn--sea btn--no-border btn--shadow" onClick={ nextStep }  > Next </button>
          </div>
        </form>
      </div>
    </div>
  );
};
