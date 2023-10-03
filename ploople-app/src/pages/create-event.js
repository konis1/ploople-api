import CreateEventStep1 from "./create-event-step1";
import CreateEventStep2 from "./create-event-step2";
import CreateEventStep3 from "./create-event-step3";
import CreateEventStep4 from "./create-event-step4";

export default function CreateEvent(step) {
//Déterminer category, date, comment, friends qui sont les éléments du formulaire
// Déterminer Step pour savoir quelle partie du formulaire nous allons afficher (cf switch ci dessous)
  switch (step) {
    case "1":
      return <CreateEventStep1 selectedCategory={category}/>; //CAtegory peut êter NULL si on arrive de l'acceuil, aura une valeure sinon
    case "2":
      return <CreateEventStep2/>;
    case "3":
      return <CreateEventStep3/>;
    default:
      return <CreateEventStep4/>;
  }

}
