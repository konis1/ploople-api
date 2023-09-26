import React, {useEffect, useState} from "react";
import CardCategory from "../components/cardCategory"
import BtnNext from "../components/btnNext"
import "./create-event-step1.css";



export default function CreateEventStep1() {

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = "http://localhost:3000/api/version1/types";

  useEffect(() => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        setCategories(data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setCategories(null);
       })
       .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="home-container text-center">
      <form>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      
        <div className="steps">
          1 - Choose the type of event
        </div>
        <div className="cards">
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
