import useFetch from "../services/api.js"
import BtnNext from "../components/btnNext"
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

export default function CreateEventStep1() {
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
          <Cards value={data}/>
          <div>
            <BtnNext/>
          </div>
        </form>
      </div>
    </div>
  );
};
