import useFetch from "../services/api.js"
import Cards from "../components/cards.js"
import "../components/cardCategory.css";
import "./create-event-step1.css";


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

function cardFriend( data) {
  const listItems = data.map(friend => {
    return (
      <>
        <label key={friend.key}>
          <input  type="radio" name="friend" value={friend.name} />
            <div className="card-friend">
              <h2 className="title--bottom title--center title--shadow"> {friend.name} </h2>
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

export default function CreateEventStep3({change,handleClick}) {
  const {data, error, loading} = useFetch("http://localhost:3000/api/version1/friends");


  if (loading) return <LoadingScreen/>
  if (error) return <ErrorScreen/>

  return (
    <div className="wrapper">
      <div className="home-container text-center">
        <form>
          <div className="steps">
            <h1 className="steps--title">3 - Invite your friends</h1>
          </div>
          {/* Add the friend list from scratch 1 hour */}
            {cardFriend(data)}
          <div>
            <button className="form__button btn--sea btn--no-border btn--shadow" onClick={handleClick} > Suivant</button>
          </div>
        </form>
      </div>
    </div>
  );
};
