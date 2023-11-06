import jwt from "jsonwebtoken";

const generateToken = (userID) => {

    const payload = {
        sub: userID,
    };
    const secretOrPrivateKey = process.env.PASSWORD_TOKEN_SECRET;
    const options = {
        expiresIn: "7 days",
    };
    
    const token = jwt.sign(payload, secretOrPrivateKey, options);
    console.log('token :>> ', token);
    return token;

};

export { generateToken };