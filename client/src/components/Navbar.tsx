import { Link } from "react-router-dom"
import Searchbar from "./Searchbar"


function Navbar() {
  return (
    <div>
      <Link to="about">About</Link>
      <Searchbar />
      <Link to="profile">Profile</Link>
      <Link to="login">Log in</Link>
      <Link to="registration">Sign up</Link>
    </div>
  );
};

export default Navbar