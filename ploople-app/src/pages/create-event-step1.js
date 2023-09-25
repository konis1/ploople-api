import React, {useEffect, useState} from "react";
import CardCategory from "../components/cardCategory"
import BtnNext from "../components/btnNext"
import { useNavigate } from 'react-router-dom';
import "./create-event-step1.css";

export default function App() {
  const apiUrl = "/api/version1/events/new"
  const [categories, setCategories] = useState([]);
  const fetchCategoriesData = () => {
    fetch(apiUrl, {
      method: "GET",
    })
      .then(response => response.json())
      .then(data => {
        setCategories(data);
        console.log(categories[0].name);
      })
  }

  useEffect(() => {
    fetchCategoriesData()
  }, [])

  return (
    <div className="home-container text-center">
      <form>
        <div className="steps">
          1 - Choose the type of event
        </div>
        <div className="cards ">
          <CardCategory/>
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
