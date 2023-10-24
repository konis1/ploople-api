import CreateEventStep1 from "./create-event-step1";
import CreateEventStep2 from "./create-event-step2";
import CreateEventStep3 from "./create-event-step3";
// import CreateEventStep4 from "./create-event-step4";
import { useState } from 'react';


export default function CreateEvent() {
  const[formCategory, setFormCategory] = useState("");
  const[step, setStep] = useState(0);
  const[formDate, setFormDate] = useState("");
  const[formComment, setFormComment] = useState("");
  const[formFriends, setFormFriends] = useState([]);
  const initialFormData = [
    {
      step:0,
      category: "",
      date:"",
    }
  ]


  function setCategory(value) {
    setFormCategory(value);
  }
  function setFriends(event) {
    let updatedList = [...formFriends];
    if (event.checked) {
      updatedList = [...formFriends, event.value]
    }
    else {
      updatedList.splice(formFriends.find(event.value))
    }
    setFormFriends(updatedList);
    console.log(formFriends)
  }

  function handleClick() {
    addStep();
    //3 - if comes from step 2 then the category should be already selected.
  }


  function handleClick2(date,comment) {

    setFormDate(date);
    setFormComment(comment);
    addStep();
    //3 - if comes from step 2 then the category should be already selected.
  }

  function addStep() {
    setStep(step + 1);
  }
  console.log('first = ' + formFriends.first)
  console.log('last = ' + formFriends.last)

//Déterminer category, date, comment, friends qui sont les éléments du formulaire
// Déterminer Step pour savoir quelle partie du formulaire nous allons afficher (cf switch ci dessous)
  switch (step) {
    case 1:
      return <CreateEventStep2 handleClick = { handleClick2 }/>;
    case 2:
      return <CreateEventStep3 handleClick = { handleClick } change = {setFriends}/>;
    // case "3":
    //   return <CreateEventStep4/>;
    default:
      return <CreateEventStep1 change = { setCategory } handleClick = { handleClick }/>; //CAtegory peut êter NULL si on arrive de l'acceuil, aura une valeure sinon
  }

}
