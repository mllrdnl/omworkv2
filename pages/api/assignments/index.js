import connectMongo from "../../../utils/connectMongo.js";
import {
  getAssignment,
  getAssignments,
  postAssignment,
  deleteAssignment,
} from "../../../server/assignmentController.js";

export default async function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: "Error in the connection" })
  );
  const { method } = req;

  switch (method) {
    case "GET":
      getAssignments(req, res);
      break;
    case "POST":
      postAssignment(req, res);
      break;
    case "PUT":
      putAssignment(req, res);
      break;
    case "DELETE":
      deleteAssignment(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
