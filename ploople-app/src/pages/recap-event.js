
import Steps from "../components/steps";

export default function RecapEvent({data, previousStep, nextStep, actualStep}) {

  return (
    <>
      <Steps actualStep = {actualStep + 1}/>
      <div>
        {
          data.category
        }
      </div>
      <div>
        {
          data.date_start.toLocaleString()
        }
      </div>
      <div>
        {
          data.date_end.toLocaleString()
        }
      </div>
      <div>
        {
          data.comment
        }
      </div>
      <div>
        {
          data.friends.map((friend,index) => (
            <li key={index}> {friend}</li>
          ))
          }
      </div>

      <div>
        <button className="form__button btn--sea btn--no-border btn--shadow" onClick={ previousStep}  > Previous </button>
        <button className="form__button btn--sea btn--no-border btn--shadow" onClick={ nextStep } > Confirm</button>
      </div>

    </>
  );
};
