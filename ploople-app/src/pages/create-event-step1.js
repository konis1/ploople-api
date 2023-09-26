import React, {useEffect, useState} from "react";
import CardCategory from "../components/cardCategory"
import BtnNext from "../components/btnNext"
import "./create-event-step1.css";

export default function App() {

  const [categories, setCategories] = useState([]);
  const url = "http://localhost:3000/api/version1/types"

    const fetchCategoriesData = () => {
      fetch(url)
        .then(response => {
          return response.json();
        })
        .then(data => {
          setCategories(data);
          console.log(categories)
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
        <div className="cards">
          <CardCategory value= {categories[0]}/>
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
