import connectMongo from "../../../utils/connectMongo.js";
import Assignment from "../../../models/Assignment.js";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  connectMongo();

  // get single assignment by id
  if (method === "GET") {
    try {
      const assignment = await Assignment.findById(id);
      console.log(assignment);
      res.status(200).json(assignment);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

// update an assignment
// if (method === "PUT") {
//   try {
//     const assignment = await Assignment.findByIdAndUpdate(id, req.body, {
//       new: true,
//     });
//     res.status(201).json(assignment);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// }

// // delete an assignment
// if (method === "DELETE") {
//   try {
//     if (id) {
//       await Assignment.findByIdAndDelete(id);
//       res.status(200).json("The assignment has been deleted!");
//     }
//     res.status(404).json({ error: "Assignment not selected" });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// }
