import useFetch from "../services/api.js"
import {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
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

function handleClick() {
  //1 - Save the category
  //2 - Link to create-event-step2 (create a switch with steps ??) <CreateEvent step={step}/>
  //3 - if comes from step 2 then the category should be already selected.
}

export default function CreateEventStep1({formData}) {
  const {data, error, loading} = useFetch("http://localhost:3000/api/version1/types");

  if (loading) return <LoadingScreen/>
  if (error) return <ErrorScreen/>
  console.log(formData);
  return (
    <div className="wrapper">
      <div className="home-container text-center">
        <form>
          <div className="steps">
            <h1 className="steps--title">1 - Choose the type of event</h1>
          </div>
          <Cards categories={data}
          />
          <div>
            <Link to="../create-event-step2" relative="true">
              <button className="form__button btn--sea btn--no-border btn--shadow" onClick={handleClick()} > Suivant</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
