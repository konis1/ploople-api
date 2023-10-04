import CreateEventStep1 from "./create-event-step1";
import CreateEventStep2 from "./create-event-step2";
import CreateEventStep3 from "./create-event-step3";
import CreateEventStep4 from "./create-event-step4";
import { useState } from 'react';


export default function CreateEvent() {
  const[formCategory, setFormCategory] = useState("");
  const[step, setStep] = useState("0");

  const change = () => {
    console.log("parent")
  }

//Déterminer category, date, comment, friends qui sont les éléments du formulaire
// Déterminer Step pour savoir quelle partie du formulaire nous allons afficher (cf switch ci dessous)
  switch (step) {
    case "1":
      return <CreateEventStep2/>;
    case "2":
      return <CreateEventStep3/>;
    case "3":
      return <CreateEventStep4/>;
    default:
      return <CreateEventStep1 change = { change }/>; //CAtegory peut êter NULL si on arrive de l'acceuil, aura une valeure sinon
  }

}
