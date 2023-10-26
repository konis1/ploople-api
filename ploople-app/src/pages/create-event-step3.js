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

function cardFriend(data, change) {
  const listItems = data.map(friend => {
    let name = friend.user_friendy.first_name + " " + friend.user_friendy.last_name
    return (
      <>
            <div className="card-friend">
              <label  key={friend.key}>
              <input  type="checkbox" name="friend" value={name} onChange={(e)=>change(e.target)} />
              <h2 className=""> {name} </h2>
              </label>
            </div>
      </>
    )
  })
  return(
    <div >
      {listItems}
    </div>
  );
}

export default function CreateEventStep3( {handleClick, change} ) {
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
            {cardFriend(data, change)}
          <div>
            <button className="form__button btn--sea btn--no-border btn--shadow" onClick={ handleClick } > Suivant</button>
          </div>
        </form>
      </div>
    </div>
  );
};
