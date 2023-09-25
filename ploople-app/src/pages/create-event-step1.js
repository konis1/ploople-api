import React, {useEffect, useState} from "react";
import CardCategory from "../components/cardCategory"
import BtnNext from "../components/btnNext"
import { useNavigate } from 'react-router-dom';
import "./create-event-step1.css";

export default function App() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/api/version1/events/new", {
      method: "GET",
    })
      .then(response => response.json())
      .then(data => {
        setCategories(data);
      })
      .catch((error) => console.log(error));
  }, [categories]);

  return (
    <div className="home-container text-center">
      <form>
        <div className="steps">
          1 - Choose the type of event
      {categories[0].name}
        </div>
        <div className="cards">
          <CardCategory />
          <CardCategory/>
          <CardCategory/>
          <CardCategory/>
          <CardCategory/>
          <CardCategory/>
          <CardCategory/>
        </div>
        <div>
          <BtnNext/>
        </div>
      </form>
    </div>
  );
};
