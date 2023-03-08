import Assignment from "../models/Assignment.js";

// get: http://localhost:3000/api/assignments
export async function getAssignments(req, res) {
  try {
    const assignments = await Assignment.find({});
    if (!assignments) return res.status(404).json({ error: "Data not found" });
    res.status(200).json(assignments);
  } catch (error) {
    res.status(404).json({ error: "Error while fetching data" });
  }
}

// get: http://localhost:3000/api/assignments/1
export async function getAssignment(req, res) {
  try {
    const { assignmentId } = req.query;
    if (assignmentId) {
      const assignment = await Assignment.findById(assignmentId);
      res.status(200).json(assignment);
    }
    res.status(404).json({ error: "Assignment not selected!" });
  } catch (error) {
    res.status(404).json({ error: "Cannot get the user..." });
  }
}

// post: http://localhost:3000/api/assignment
export async function postAssignment(req, res) {
  try {
    const formData = req.body;
    if (!formData)
      return res.status(404).json({ error: "Form Data Not Provided...!" });

    const newAssignment = await Assignment.create(formData);

    if (!newAssignment)
      return res.status(404).json({ error: "Error creating assignment" });
    res.status(200).json(newAssignment);
  } catch (error) {
    return res.status(404).json({ error });
  }
}

// put: http://localhost:3000/api/assignment/1
export async function putAssignment(req, res) {
  try {
    const { assignmentId } = req.query;
    const formData = req.body;

    if (assignmentId && formData) {
      const assignment = await Assignment.findByIdAndUpdate(
        assignmentId,
        formData
      );
      res.status(200).json(user);
    }
    res.status(404).json({ error: "Assignment Not Selected...!" });
  } catch (error) {
    res.status(404).json({ error: "Error While Updating the Data...!" });
  }
}

// delete: http://localhost:3000/api/assignment/1
export async function deleteAssignment(req, res) {
  try {
    const { assignmentId } = req.query;

    if (assignmentId) {
      const assignment = await Assignment.findByIdAndDelete(assignmentId);
      return res.status(200).json(assignment);
    }

    res.status(404).json({ error: "Assignment Not Selected...!" });
  } catch (error) {
    res.status(404).json({ error: "Error While Deleting the Assignment...!" });
  }
}
