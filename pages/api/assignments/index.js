import connectMongo from "../../../utils/connectMongo.js";
import Assignment from "../../../models/Assignment.js";

export default async function handler(req, res) {
  const { method } = req;

  connectMongo();

  if (method === "GET") {
    try {
      const assignments = await Assignment.find();
      res.status(200).json(assignments);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  if (method === "POST") {
    try {
      const assignment = await Assignment.create(req.body);
      res.status(201).json(assignment);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
