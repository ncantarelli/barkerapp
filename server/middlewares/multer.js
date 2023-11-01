import multer from "multer";
import path from "path";

const storage = multer.diskStorage({});

const fileFilter = (req, file, cb) => {
    // Logic to decide if we accept the file the user is uploading or not:
    // CRITERIA: The type of file.
    console.log('file :>> ', file);

    const extension = path.extname(file.originalname);

    console.log('extension :>> ', extension);

    if (extension !== ".png" && extension !== ".jpg" && extension !== ".jpeg") {
        cb(null, false);
    } else {
        cb(null, true);
    }


    // To reject this file pass "false", like so:
    // cb(null, false);
    
    // To accept this file pass "true", like so:
    // cb(null, true);

    //You can always pass an error if something goes wrong:
    // cb(new Error("I don't have a clue!"));
};

const multerUpload = multer({ storage, fileFilter });

export default multerUpload;