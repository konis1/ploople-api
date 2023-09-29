

export default function Cards(categories){
  const listItems = categories.value.map(category => {
    return (
      <>
        <label key={category.key}>
          <input  type="radio" name="categorie" value={category.name} />
            <div className="card-category" style={{
              backgroundImage:`url(${'http://localhost:3000/' + category.image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              }}>
              <h2 className="title--bottom title--center title--shadow"> {category.name} </h2>
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
