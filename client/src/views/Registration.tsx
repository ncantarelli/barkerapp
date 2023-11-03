import { Link } from "react-router-dom";
import "../style/registration-styles.css";
import { ChangeEvent, useState, FormEvent } from "react";

type UserImage = {
  userImage: string,
};

interface User extends UserImage {

  userName: string,
  email: string,
  password: string,

};

function Registration() {

  const [selectedFile, setSelectedFile] = useState<File | string>("");
  const [newUser, setNewUser] = useState<User>({
    userName: "",
    email: "",
    password: "",
    userImage: "",
  });
  console.log('newUser :>> ', newUser);
  const handleRegisterInput = (e: ChangeEvent<HTMLInputElement>) => {
    
    console.log('value :>> ', e.target.value);
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
    
  };

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('e :>> ', e);


  };

  const handleImageSubmit = async (e: any) => {

    e.preventDefault();
    setSelectedFile(e.target.files?.[0] || "");

    const formData = new FormData();
    formData.append("userImage", e.target.files?.[0]);
   
    const requestOptions = {
      method: 'POST',
      body: formData,
    };
    
    try {

      const response = await fetch(
        "http://localhost:6969/api/users/imageUpload",
        requestOptions,
      );
      console.log('response :>> ', response);
      const result = await response.json() as UserImage;
      console.log('result :>> ', result);
      setNewUser({ ...newUser, userImage: result.userImage });

    } catch (error) {

      console.log('error :>> ', error);

    };
  };
  
  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    console.log('differentnewuser :>> ', newUser);
    e.preventDefault();

    const urlencoded = new URLSearchParams();
    urlencoded.append("userName", newUser.userName);
    urlencoded.append("email", newUser.email);
    urlencoded.append("password", newUser.password);
    urlencoded.append("userImage", newUser.userImage);

    const requestOptions = {
      method: 'POST',
      body: urlencoded,
    };

    try {
      const response = await fetch("http://localhost:6969/api/users/register", requestOptions);
      const result = await response.json()
      console.log('result :>> ', result);
    } catch (error) {
      console.log('error :>> ', error);
    }
  };

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
      <form onSubmit={handleImageSubmit} className="ImageUploadBox">
        <label>Profile Image<span>*</span></label>
        {selectedFile ? (
          <div className="alignmentUploadedImage">
            <label className="uploadedImageContainer">              
              <img className="uploadedImage" src={typeof selectedFile === "string" ? selectedFile : URL.createObjectURL(selectedFile)}/>
              <input type="file" className="HiddenImage" name="file" multiple={false} onChange={handleFileInput}></input>
            </label>
          </div>
          ) : (
            <label className="ProfilePictureInput">
              <img src=".\src\assets\upload-icon.svg" alt="Media" />
              <input type="file" className="Hidden" name="file" multiple={false} onChange={handleImageSubmit}></input>
            </label>
          )
        }
        </form>
        <form onSubmit={handleFormSubmit}>
        <label>Email<span>*</span></label><input type="email" name="email" required onChange={handleRegisterInput}></input>
        <label>Username<span>*</span></label><input type="text" required name="userName" onChange={handleRegisterInput}></input>
        <label>Password<span>*</span></label><input type="password" required name="password" onChange={handleRegisterInput}></input>
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