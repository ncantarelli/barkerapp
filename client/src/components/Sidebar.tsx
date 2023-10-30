import { Link } from "react-router-dom";
import PublishButton from "./PublishButton";
import "../style/sidebar-styles.css";

function Sidebar() {
  return (

    <div className="Sidebar">
      <div className="ElementsContainer">
        <div className="Logo" >
          <img src=".\src\assets\logo.svg" />
        </div>
        <div className="LinksContainer">
          <div className="NavigationLinks">
            <img src=".\src\assets\feed-icon.svg" alt="" />
            <Link to="/">Feed</Link >
          </div>
          <div className="NavigationLinks">
            <img src=".\src\assets\notification-icon.svg" alt="" />
            <Link to="Notifications">Notifications</Link >
          </div>
          <div className="NavigationLinks">
            <img src=".\src\assets\profile-icon.svg" alt="" />
            <Link to="Profile">Profile</Link >
          </div>
        </div>
      </div>
      {/* <Link to="/"></Link > */}
      <PublishButton />
    </div>
      
  );
};

export default Sidebar