import connectMongo from "../../../utils/connectMongo.js";
import {
  getStudents,
  postStudent,
  putStudent,
  deleteStudent,
} from "../../../server/userController.js";

export default async function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: "Error in the connection" })
  );

  const { method } = req;

  switch (method) {
    case "GET":
      getStudents(req, res);
      break;
    case "POST":
      postStudent(req, res);
      break;
    case "PUT":
      putStudent(req, res);
      break;
    case "DELETE":
      deleteStudent(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
