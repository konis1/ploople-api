import CreateEventStep1 from "./create-event-step1";
import CreateEventStep2 from "./create-event-step2";
import CreateEventStep3 from "./create-event-step3";
import RecapEvent from "./recap-event";
import { useState } from 'react';


export default function CreateEvent() {
  const[formCategory, setFormCategory] = useState("");
  const[step, setStep] = useState(0);
  const[formDate, setFormDate] = useState("");
  const[formComment, setFormComment] = useState("");
  const[formFriends, setFormFriends] = useState([]);

  function setCategory(value) {
    setFormCategory(value);
  }

  function setDate(value) {
    setFormDate(value);
    console.log(value);
  }

  function setComment(value) {
    console.log(value);
    setFormComment(value);
  }

  function setFriends(event) {
    let updatedList = [...formFriends];
    if (event.checked) {
      updatedList = [...formFriends, event.value]
    }
    else {
      // Cherche le friend dans updatedList et retourne l'index
      const index = formFriends.findIndex((element) => element === event.value);
      updatedList.splice(index,1); //Supprime l'élément de updatedList lorsque l'on "uncheck"la checkbox"
    }
    setFormFriends(updatedList);
  }

  function handleClick() {
    addStep();
    //3 - if comes from step 2 then the category should be already selected.
  }

  function addStep() {
    setStep(step + 1);
  }

//Déterminer category, date, comment, friends qui sont les éléments du formulaire
// Déterminer Step pour savoir quelle partie du formulaire nous allons afficher (cf switch ci dessous)
  switch (step) {
    case 1:
      return <CreateEventStep2 handleClick = { handleClick } changeComment = {setComment} changeDate = {setDate}/>;
    case 2:
      return <CreateEventStep3 handleClick = { handleClick } change = {setFriends}/>;
    case 3:
      return <RecapEvent category = {formCategory} date = {formDate} comment = {formComment} friends= {formFriends}/>;
    default:
      return <CreateEventStep1 change = { setCategory } handleClick = { handleClick }/>; //CAtegory peut êter NULL si on arrive de l'acceuil, aura une valeure sinon
  }

}
