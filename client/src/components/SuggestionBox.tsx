import { Link } from "react-router-dom";
import "../style/suggestionbox-styles.css";
import Searchbar from "./Searchbar";

function SuggestionBox() {
  return (
    <div className="SuggestionBox">
      <Searchbar />
      <div className="FollowSuggestions">
        <h4>Who to follow</h4>
        <div></div>
      </div>
      <div className="UserAuthentification">
        <Link to="/login">Log in</Link>
        <p>or</p>
        <Link to="/registration">Sign up</Link>
      </div>
    </div>
  )
}

export default SuggestionBox