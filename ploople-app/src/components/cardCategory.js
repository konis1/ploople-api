
import "./cardCategory.css";


export default function CardCategory(value) {

  return (
    <label>
      <input type="radio" name="categorie" value="{value.name}" />
      <div className="card-category" >
      <h2 className="title--bottom title--center">{value.name} </h2>
      </div>
    </label>
  );
};
