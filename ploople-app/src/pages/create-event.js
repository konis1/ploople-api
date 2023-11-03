import CreateEventStep1 from "./create-event-step1";
import CreateEventStep2 from "./create-event-step2";
import CreateEventStep3 from "./create-event-step3";
import RecapEvent from "./recap-event";
import { useState } from 'react';


export default function CreateEvent() {
  const[step, setStep] = useState(0);
  const[formData, setFormData] = useState({
    category:"",
    date_start: new Date(),
    date_end: new Date(),
    comment: "",
    friends: []
  })

    function submitForm() {
    fetch('http://localhost:3000/api/version1/events/', {
        method:'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(formData)
      })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
    }

  function setData(dataValue, dataType) {
    switch (dataType) {
      case "category":
        setFormData({
          ...formData,
          category: dataValue
        })
        break;
      case "date":
        setFormData({
          ...formData,
          date_start: dataValue,
          date_end: dataValue
        })
        break;
      case "comment":
        setFormData({
          ...formData,
          comment: dataValue
        })
        break;
      case "friends":
        let updatedList = [...formData.friends];
          if (dataValue.checked) {
            updatedList = [...formData.friends, dataValue.value]
          }
          else {
            // Cherche le friend dans updatedList et retourne l'index
            const index = formData.friends.findIndex((element) => element === dataValue.value);
            updatedList.splice(index,1); //Supprime l'élément de updatedList lorsque l'on "uncheck"la checkbox"
          }
          setFormData({
          ...formData,
          friends:updatedList
        })
        break;
        default:
          console.log("Error");
    }
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
      return <CreateEventStep2 handleClick = { handleClick } change = {setData}/>;
    case 2:
      return <CreateEventStep3 handleClick = { handleClick } change = {setData}/>;
    case 3:
      return <RecapEvent data = {formData} handleClick = { submitForm } />;
    default:
      return <CreateEventStep1 change = { setData } handleClick = { handleClick }/>; //CAtegory peut êter NULL si on arrive de l'acceuil, aura une valeure sinon
  }

}
