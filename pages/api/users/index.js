import connectMongo from "../../../utils/connectMongo.js";
import {
  getUsers,
  postUser,
  putUser,
  deleteUser,
  getStudents,
  postStudent,
  putStudent,
} from "../../../server/userController.js";
import { deleteStudent } from "../../../lib/helper.js";

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
      res.status(405).end(`Method ${method} Not Allowd`);
      break;
  }
}
