import React, {useEffect, useState} from "react";
import CardCategory from "../components/cardCategory"
import BtnNext from "../components/btnNext"
import { useNavigate } from 'react-router-dom';
import "./create-event-step1.css";

export default function App() {

  const [categories, setCategories] = useState([]);

    const fetchCategoriesData = () => {
      fetch("http://localhost:3000/api/version1/events/new", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'Access-Control-Allow-Origin': 'http://localhost:3000/api/version1/events/new',
        }
      })
        .then(response => {
          response.json();
        })
        .then(data => {
          setCategories(data);
          console.log(data);
        })
    }

    useEffect(() => {
      fetchCategoriesData()
    }, [categories])

  return (
    <div className="home-container text-center">
      <form>
        <div className="steps">
          1 - Choose the type of event
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
