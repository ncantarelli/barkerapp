import { Link } from "react-router-dom";
import PublishButton from "./PublishButton";
import "../style/sidebar-styles.css";

function Sidebar() {
  return (

    <div className="Sidebar">
      <div className="ElementsContainer">
        <div className="Logo" >
          {/* <Link to="/"><img src=".\src\assets\logo.svg" /></Link> */}
          {/* <Link to="/"><img src=".\src\assets\logo-green.svg" /></Link> */}
          {/* <Link to="/"><img src=".\src\assets\logo-black-green.svg" /></Link> */}
          <Link to="/"><img src=".\src\assets\logo-purple.svg" /></Link>
        </div>
        <div className="LinksContainer">
          <Link to="/">
            <div className="NavigationLinks">
              <img src=".\src\assets\feed-icon.svg" alt="" />
              <p>Feed</p>
            </div>
          </Link >
          <Link to="notifications">
            <div className="NavigationLinks">
              <img src=".\src\assets\notification-icon.svg" alt="" />
              <p>Notifications</p>
            </div>
          </Link >
          <Link to="profile">
            <div className="NavigationLinks">
              <img src=".\src\assets\profile-icon.svg" alt="" />
              <p>Profile</p>
            </div>
          </Link >
        </div>
      </div>
      {/* <Link to="/"></Link > */}
      <PublishButton />
      {/* <div>
        <img src="" />
        <p>Hey there, Nico!</p>
      </div> */}
    </div>
      
  );
};

export default Sidebar