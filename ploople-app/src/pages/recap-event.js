
export default function RecapEvent({data, handleClick}) {

  return (
    <>
      <h1 className="steps--title">4 - Confirm your event</h1>
      <div>
        {
          data.category
        }
      </div>
      <div>
        {
          data.date_start.toLocaleString()
        }
      </div>
      <div>
        {
          data.date_end.toLocaleString()
        }
      </div>
      <div>
        {
          data.comment
        }
      </div>
      <div>
        {
          data.friends.map((friend,index) => (
            <li key={index}> {friend}</li>
          ))
          }
      </div>

      <div>
      <button className="form__button btn--sea btn--no-border btn--shadow" onClick={handleClick} > Confirm</button>
      </div>

    </>
  );
};
