import React, {useEffect, useState} from "react";
import BtnNext from "../components/btnNext"
import "../components/cardCategory.css";
import "./create-event-step1.css";


const LoadingScreen = () => {
  console.log("loading");
  return (
    <div>
    </div>
  );
};

export function Cards(categories){
  const listItems = categories.value.map(category => {
    return (
      <>
        <label key={category.key}>
          <input  type="radio" name="categorie" value={category.name} />
            <div className="card-category" style={{
              backgroundImage:`url(${'http://localhost:3000/' + category.image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              }}>
              <h2 className="title--bottom title--center title--shadow"> {category.name} </h2>
            </div>
        </label>
      </>
    )
  })
    return(
      <div className="cards">
        {listItems}
      </div>
    );
  }

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

  if (loading) return <LoadingScreen/>

  return (
    <div className="wrapper">
      <div className="home-container text-center">
        <form>
          <div className="steps">
            <h1 className="steps--title">1 - Choose the type of event</h1>
            
          </div>
          <Cards value={categories}/>
          <div>
            <BtnNext/>
          </div>
        </form>
      </div>

    </div>
  );
};
