import { Link } from "react-router-dom"
import PublishButton from "./PublishButton"

function Sidebar() {
  return (

    <div>
      <img/>
      <Link to="/">Feed</Link >
      <Link to="Notifications">Notifications</Link >
      <Link to="Profile">Profile</Link >
      {/* <Link to="/"></Link > */}
      <PublishButton />
    </div>
      
  );
};

export default Sidebar