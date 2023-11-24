import useFetch from "../services/api.js"
import { existInArray } from "./create-event.js";
import Steps from "../components/steps.js";

const LoadingScreen = () => {
  return (
    <div>
      Loading..
    </div>
  );
};

const ErrorScreen = () => {
  return (
    <div>
      Error..
    </div>
  );
};



function cardFriend(data, change, formData) {
  const listItems = data.map(friend => {
    let name = friend.user_friendy.name
    let isFriendSelected = existInArray(formData.friends, name)
    return (

            <div className="card-friend" key={friend.user_friendy.id}>
              <label>
                <input
                  type="checkbox"
                  name="friends"
                  value={ name }
                  checked = { isFriendSelected }
                  onChange={(e)=> {
                      change(e.target, e.target.name);
                    }
                  }
                />
                <h2 className=""> { name } </h2>
              </label>
            </div>
    )
  })
  return(
    <div >
      { listItems }
    </div>
  );
}

export default function CreateEventStep3( { previousStep, nextStep, change, formData, actualStep } ) {
  const {data, error, loading} = useFetch("http://localhost:3000/api/version1/friends");

  if (loading) return <LoadingScreen/>
  if (error) return <ErrorScreen/>

  return (
    <div className="wrapper">
      <div className="home-container text-center">
        <form>
        <Steps actualStep = {formData.step} doneSteps = {formData.stepsDone}/>
            { cardFriend(data, change, formData) }
          <div>
            <button className="form__button btn--no-border btn--shadow" onClick={ previousStep}  > Previous </button>
            <button className="form__button btn--sea btn--no-border btn--shadow" onClick={ nextStep } > Next</button>
          </div>
        </form>
      </div>
    </div>
  );
};
