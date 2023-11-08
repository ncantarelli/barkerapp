import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import "../style/login-styles.css";

type LoginCredentials = {
  email: string;
  password: string;
};

type User = {
  userName: string;
  email: string;
  userImage?: string;
}
type LoginResponse = {
  message: string;
  user: User;
  token: string;
};

function Login() {

  const [loginCredentials, setLoginCredentials] = useState<LoginCredentials | null>(null);

  const handleLoginInput = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginCredentials({
      ...(loginCredentials as LoginCredentials),
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log('loginCredentials :>> ', loginCredentials);

    // const myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("email", loginCredentials!.email);
    urlencoded.append("password", loginCredentials!.password);

    const requestOptions = {
      method: 'POST',
      // headers: myHeaders,
      body: urlencoded,
    };

    try {
      const response = await fetch("http://localhost:6969/api/users/login", requestOptions);

      if (response.ok) {

        const result: LoginResponse = await response.json();
        // console.log('result :>> ', result);
        const token = result.token;
        if (token) {
          localStorage.setItem("token", token);
        }
      };
    } catch (err) {
      const error = err as Error;
      console.log('error :>> ', error.message);
    };
  };

  const [isUserLogged, setIsUserLogged] = useState(false);
  
  const isUserLoggedIn = () => {
    const token = localStorage.getItem("token")
    return token ? true : false;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsUserLogged(false);
  }
  
  useEffect(() => {
    const isLoggedIn = isUserLoggedIn();
    if (isLoggedIn) {
      console.log("user logged in");
      setIsUserLogged(true);
    } else {
      console.log("user is NOT logged in");
      setIsUserLogged(false);
    };
  }, [isUserLogged]);

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
      <form onSubmit={handleSubmitLogin}>
        <label>Email</label><input name="email" type="email" required onChange={handleLoginInput}></input>
        <label>Password</label><input name="password" type="password" required onChange={handleLoginInput}></input>
        <div>
          <button type="submit" className="LoginButton">Login!</button>
          <button type="submit" className="LoginButton" onClick={logout}>Logout!</button>
        </div>
      </form>
      <div className="LoginInteractions">
        <div>
          <input type="radio" className="RadioInput"></input>
          <label>Remember me</label>
        </div>
        <a>Forgot password</a>
      </div>

    </div>
  );
};

export default Login