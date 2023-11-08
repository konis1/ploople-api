import { useState } from "react"

export default function Cards({ categories, formData, change }){

  const[selected, setSelected] = useState(formData.category);

  const listItems = categories.map(category => {
    return (
      <label key={category.id}>
        <input
        type="radio"
        name="category"
        value={category.name}
        checked={selected === category.name}
        onChange={(e) => {
          setSelected(e.target.value);
          change(e.target.value, e.target.name)
        }}
        />
          <div
            className="card-category"
            style={{
              backgroundImage:`url(${'http://localhost:3000/' + category.image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <h2 className="title--bottom title--center title--shadow"> {category.name} </h2>
          </div>
      </label>
    )
  })
  return(
  <div className="cards">
    {listItems}
  </div>
  );
}
