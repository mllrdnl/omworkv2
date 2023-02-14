import Assignment from "../../models/Assignment";

// get all assignments
export const getAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find();
    console.log(assignments);

    return res.status(200).json({ status: "success", ...assignments });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: "error", message: error.message });
  }
};

// create an assignment
export const createAssignment = async (req, res) => {
  try {
    const newAssignment = await Assignment.create({
      title: req.body.title,
      category: req.body.category,
      desc: req.body.desc,
      file: req.body.file,
      frequency: req.body.frequency,
      duration: req.body.duration,
      dateAssigned: req.body.dateAssigned,
      active: req.body.active,
    });
    return res.status(200).json({ status: "sucess", newAssignment });
  } catch (error) {
    return res.status(400).json({ status: "error", message: error.message });
  }
};
