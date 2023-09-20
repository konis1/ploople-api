
import "./cardCategory.css";


export default function CardCategory() {

  return (
    <label>
      <input type="radio" name="categorie" value="beers" />
      <div className="card-category" >
      <h2 className="title--bottom title--center"> Beers </h2>
      </div>
    </label>
  );
};
