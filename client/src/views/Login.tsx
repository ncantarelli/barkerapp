import "../style/login-styles.css";

function Login() {
  return (
    <div className="LoginContainer">
      <div className="HeaderElements">
        {/* <img src=".\src\assets\logo.svg"></img> */}
        {/* <img src=".\src\assets\logo-green.svg"></img> */}
        {/* <img src=".\src\assets\logo-black-green.svg"></img> */}
        <img src=".\src\assets\logo-purple.svg"></img>
        <h1>Log in to your account</h1>
        <h4>Welcome back!</h4>
      </div>
      <form>
        <label>Email</label><input type="email" required></input>
        <label>Password</label><input type="password" required></input>
      </form>
      <div className="LoginInteractions">
        <div><input type="radio" className="RadioInput"></input><label>Remember me</label></div>
        <a>Forgot password</a>
      </div>
      <button type="submit" className="LoginButton">Login!</button>
    </div>
  );
};

export default Login