import "../style/searchbar-styles.css";

function Searchbar() {
  return (
    <div className="Searchbar">
      <input type="text" placeholder="Search!"></input><button><img src=".\src\assets\search-icon.svg"/></button>
    </div>
  )
}

export default Searchbar