import { createRouter } from "next-connect";
import multer from "multer";

import connectMongo from "../../../utils/connectMongo.js";

const router = createRouter();
connectMongo();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
router.get(async (req, res) => {
  const assignments = await getAssignments();
  res.status(200).send(assignments);
});

router.post(upload.single("file"), async (req, res) => {
  const fileName = req.file;
  const title = req.body.title;
  const category = req.body.category;
  const desc = req.body.desc;

  const assignment = await createAssignment(fileName, title, category, desc);

  res.status(201).send(assignment);
});

export default router.handler({
  onError: (err, req, res) => {
    console.error(err.stack);
    console.log(err);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
});

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};

// export default async function handler(req, res) {
//   const { method } = req;

//   if (method === "GET") {
//     try {
//       const assignments = await Assignment.find();
//       res.status(200).json(assignments);
//     } catch (error) {
//       res.status(500).json(error);
//     }
//   }

//   if (method === "POST") {
//     try {
//       const newAssignment = await Assignment.create(req.body);
//       res.status(201).json(newAssignment);
//     } catch (error) {
//       res.status(500).json(error);
//     }
//   }
// }
