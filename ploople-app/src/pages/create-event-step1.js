import useFetch from "../services/api.js"
import Cards from "../components/cards.js"
import "../components/cardCategory.css";
import "./create-event-step1.css";
import Steps from "../components/steps.js";

const LoadingScreen = () => {
  return (
    <div>
      Loading..
    </div>
  );
};

const ErrorScreen = () => {
  return (
    <div>
      Error..
    </div>
  );
};


export default function CreateEventStep1({ formData, change, nextStep, actualStep }) {
  const {data, error, loading} = useFetch("http://localhost:3000/api/version1/types");
  if (loading) return <LoadingScreen/>
  if (error) return <ErrorScreen/>
  console.log(formData.stepsDone);
  return (
    <div className="wrapper">
      <div className="home-container text-center">
        <form>
          <Steps actualStep = {formData.step} doneSteps = {formData.stepsDone}/>
          <Cards categories={ data } formData={ formData } change={ change }/>
          <div>
            <button className="form__button btn--sea btn--no-border btn--shadow" onClick={ nextStep }> Next </button>
          </div>
        </form>
      </div>
    </div>
  );
};
