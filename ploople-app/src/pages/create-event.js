import CreateEventStep1 from "./create-event-step1";
import CreateEventStep2 from "./create-event-step2";
import CreateEventStep3 from "./create-event-step3";
import RecapEvent from "./recap-event";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export function existInArray(array, valueWeCheck) {
   const resultSearch = array.find((e) => e === valueWeCheck )
   return (resultSearch !== undefined)
 }

export default function CreateEvent() {
  const navigate = useNavigate();

  const[formData, setFormData] = useState({
    category:"",
    date_start: new Date(),
    date_end: new Date(),
    comment: "",
    friends: [],
    step: 0,
    stepsDone:[]
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
        navigate("/");
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
          if (dataValue.checked && !existInArray(updatedList, dataValue.value)) {
            updatedList = [...formData.friends, dataValue.value]
          }
          else if(!dataValue.checked && existInArray(updatedList, dataValue.value)){
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

  function addStep() {
    let updatedStepsDoneList = [...formData.stepsDone, formData.step];
    setFormData({
      ...formData,
      step: formData.step + 1,
      stepsDone: updatedStepsDoneList
    })
  }

  function removeStep() {
    let updatedStepsDoneList = [...formData.stepsDone];
    const index = formData.stepsDone.findIndex((element) => element === formData.step);
    updatedStepsDoneList.splice(index,1);
    setFormData({
      ...formData,
      step: formData.step - 1,
      stepsDone: updatedStepsDoneList
    })
  }
//Déterminer category, date, comment, friends qui sont les éléments du formulaire
// Déterminer Step pour savoir quelle partie du formulaire nous allons afficher (cf switch ci dessous)
  switch (formData.step) {
    case 1:
      return <CreateEventStep2  nextStep = { addStep } previousStep = { removeStep } change = {setData} formData = { formData } />;
    case 2:
      return <CreateEventStep3  nextStep = { addStep } previousStep = { removeStep }  change = {setData} formData = { formData } />;
    case 3:
      return <RecapEvent data = {formData} nextStep = { submitForm }  previousStep = { removeStep }  />;
    default:
      return <CreateEventStep1 formData = {formData} change = { setData } nextStep = { addStep } />; //CAtegory peut êter NULL si on arrive de l'acceuil, aura une valeure sinon
  }

}
