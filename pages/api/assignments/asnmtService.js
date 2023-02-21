import axios from "axios";
import multer from "multer";
import nc from "next-connect";

const upload = multer({ dest: "/public/uploads/" });

// get assignments

// create a new assignment
// const createAssignment = async (asnmtData) => {};

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
})
  .use(upload.single("asnmtFile"))
  .post(async (req, res) => {
    res.status(201).json({ body: req.body, file: req.file });
  });

// get a single assignment

// update an assignment

// delete an assignment

export default handler;
