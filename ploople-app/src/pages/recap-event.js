
export default function RecapEvent({category, date, comment, friends}) {
  function displayFriends() {
    const listFriends = friends.map(friend => {
      return(
        <>
          <li>{friend}</li>
        </>
      )
    })
    return(
      {listFriends}
    );
  }


  return (
    <>
      <h1 className="steps--title">4 - Confirm your event</h1>
      <div>
        {
          category
        }
      </div>
      <div>
        {
          date.toLocaleString()
        }
      </div>
      <div>
        {
          comment
        }
      </div>
      <div>
        {
          displayFriends
        }
      </div>

      <div>
      <button className="form__button btn--sea btn--no-border btn--shadow"  > Suivant</button>
      </div>

    </>
  );
};
