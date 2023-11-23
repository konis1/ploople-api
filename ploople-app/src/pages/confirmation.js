import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import "./create-event-step1.css";

export default function Confirmation() {
  const navigate = useNavigate();
  return(
    <div className="wrapper">
      <div className="home-container text-center">
        <h1> Your event has been created </h1>
        <FontAwesomeIcon icon={faCircleCheck} style = {{color: "#78D6C6", margin: ".2em"}}size="5x" />
        <p>Let's hope your friends are not busy that day</p>
        <button className="form__button btn--sea btn--no-border btn--shadow" onClick={() => navigate('./home', { replace: true })}> Home </button>
      </div>
    </div>
  );
};
