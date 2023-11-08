import useFetch from "../services/api.js"
import Cards from "../components/cards.js"
import "../components/cardCategory.css";
import "./create-event-step1.css";


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


export default function CreateEventStep1({ formData, change, nextStep }) {
  const {data, error, loading} = useFetch("http://localhost:3000/api/version1/types");
  if (loading) return <LoadingScreen/>
  if (error) return <ErrorScreen/>

  return (
    <div className="wrapper">
      <div className="home-container text-center">
        <form>
          <div className="steps">
            <h1 className="steps--title">1 - Choose the type of event</h1>
          </div>
          <Cards categories={ data } formData={ formData } change={ change }/>
          <div>
            <button className="form__button btn--sea btn--no-border btn--shadow" onClick={ nextStep }> Next </button>
          </div>
        </form>
      </div>
    </div>
  );
};
