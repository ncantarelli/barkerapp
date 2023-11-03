import { Link } from "react-router-dom";
import "../style/registration-styles.css";

function Registration() {
  return (
    <div className="RegistrationContainer">
      <div className="HeaderElements">
        {/* <img src=".\src\assets\logo.svg"></img> */}
        {/* <img src=".\src\assets\logo-green.svg"></img> */}
        {/* <img src=".\src\assets\logo-black-green.svg"></img> */}
        <img src=".\src\assets\logo-purple.svg"></img>
        <h1>Create an account</h1>
        <h4>Start barking away!</h4>
      </div>
      <form>
        <label>Profile Image</label>
        <label className="ProfilePictureInput">
          <img src=".\src\assets\upload-icon.svg" alt="Media" />
          <input type="file" className="Hidden" name="file" multiple={false}></input>
        </label>
        <label>Email<span>*</span></label><input type="email" required></input>
        <label>Username<span>*</span></label><input type="text" required></input>
        <label>Password<span>*</span></label><input type="password" required></input>
        <div>
          <button type="submit" className="RegisterButton">Sign Up!</button>
        </div>
      </form>
        
      <div className="LogInSuggestion">
        <p>Already have an account?</p>
        <Link to="/login">Log in</Link>
      </div>
    </div>
  );
};

export default Registration