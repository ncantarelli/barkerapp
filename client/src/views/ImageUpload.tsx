import { ChangeEvent, useState, FormEvent } from "react";

type UserImage = {
  userImage: string,
};

interface User extends UserImage {

  userName: string,
  email: string,
  password: string,

};

function ImageUpload() {
    const [selectedFile, setSelectedFile] = useState<File | string>("");
      const [newUser, setNewUser] = useState<User>({
    userName: "",
    email: "",
    password: "",
    userImage: "",
  });

    const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('e :>> ', e);
        setSelectedFile(e.target.files?.[0] || "");
    };

    const handleImageUpload = async (e: FormEvent<HTMLFormElement>) => {
        const formData = new FormData();
        formData.append("userImage", selectedFile);

        const requestOptions = {
          method: 'POST',
          body: formData,
        };

        try {

            const response = await fetch(
                "http://localhost:6969/api/users/imageUpload",
                requestOptions,
            );
            const result = await response.json() as UserImage;
            console.log('result :>> ', result);
            setNewUser({ ...newUser, userImage: result.userImage });

        } catch (error) {

            console.log('error :>> ', error);

        };
    };

    return (
        <div>
            <label>Profile Image<span>*</span></label>
            {selectedFile ? (
                <div className="alignmentUploadedImage">
                    <label className="uploadedImageContainer">
                        <img className="uploadedImage" src={typeof selectedFile === "string" ? selectedFile : URL.createObjectURL(selectedFile)} />
                        <input type="file" className="HiddenImage" name="file" multiple={false} onChange={handleFileInput}></input>
                    </label>
                </div>
            ) : (
                <label className="ProfilePictureInput">
                    <img src=".\src\assets\upload-icon.svg" alt="Media" />
                    <input type="file" className="Hidden" name="file" multiple={false} onChange={handleFileInput}></input>
                </label>
            )
            }
        </div>
    );
};

export default ImageUpload