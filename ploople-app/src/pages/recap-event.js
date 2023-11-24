
import Steps from "../components/steps";

export default function RecapEvent({data, previousStep, nextStep, actualStep}) {

  return (
     <div className="wrapper">
      <div className="home-container text-center">
        <Steps actualStep = {data.step} doneSteps = {data.stepsDone}/>
        <h1>Confirm event</h1>
        <div className="recap-div">
          {
            data.category
          }
        </div>
        <div>Date Start:</div>
        <div className="recap-div">
          {
            data.date_start.toLocaleString()
          }
        </div>
        <div>Date End:</div>
        <div className="recap-div">
          {
            data.date_end.toLocaleString()
          }
        </div>
        <div>Comment:</div>
        <div className="recap-div">
          {
            data.comment
          }
        </div>
        <div>You invited:</div>
        <div className="recap-div">
          <ul className="no-bullets">

          {
            data.friends.map((friend,index) => (
              <li key={index}> {friend}</li>
            ))
            }
          </ul>
        </div>

        <div>
          <button className="form__button btn--no-border btn--shadow" onClick={ previousStep}  > Previous </button>
          <button className="form__button btn--sea btn--no-border btn--shadow" onClick={ nextStep } > Confirm</button>
        </div>
          </div>
          </div>
  );
};
