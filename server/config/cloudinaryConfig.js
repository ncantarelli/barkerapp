import { v2 as cloudinary } from 'cloudinary';


const cloudinaryConfig = () => {

    cloudinary.config({
        // cloud_name: 'dykwqjdq3',
        cloud_name: process.env.CLOUD_NAME,
        // api_key: '891171895987986',
        api_key: process.env.API_KEY,
        // api_secret: "XSfLZUTyDOxKEXHCsPGjjOO0x1I",
        api_secret: process.env.API_SECRET,
        secure: true,
    });

};

export default cloudinaryConfig;
