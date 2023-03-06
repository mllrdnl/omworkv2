import User from "../models/Users";

// get: http://localhost:3000/api/users
export async function getStudents(req, res) {
  try {
    const users = await User.find({});
    if (!users) return res.status(404).json({ error: "Data not found" });
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: "Error while fetching data" });
  }
}

// get: http://localhost:3000/api/users/1
export async function getStudent(req, res) {
  try {
    const { userId } = req.query;
    if (userId) {
      const user = await User.findById(userId);
      res.status(200).json(user);
    }
    res.status(404).json({ error: "User not selected!" });
  } catch (error) {
    res.status(404).json({ error: "Cannot get the user..." });
  }
}

// post: http://localhost:3000/api/users
export async function postStudent(req, res) {
  try {
    const formData = req.body;
    if (!formData)
      return res.status(404).json({ error: "Form Data Not Provided...!" });
    User.create(formData, function (err, data) {
      return res.status(200).json(data);
    });
  } catch (error) {
    return res.status(404).json({ error });
  }
}

// put: http://localhost:3000/api/users/1
export async function putStudent(req, res) {
  try {
    const { userId } = req.query;
    const formData = req.body;

    if (userId && formData) {
      const user = await User.findByIdAndUpdate(userId, formData);
      res.status(200).json(user);
    }
    res.status(404).json({ error: "User Not Selected...!" });
  } catch (error) {
    res.status(404).json({ error: "Error While Updating the Data...!" });
  }
}

// delete: http://localhost:3000/api/users/1
export async function deleteStduent(req, res) {
  try {
    const { userId } = req.query;

    if (userId) {
      const user = await User.findByIdAndDelete(userId);
      return res.status(200).json(user);
    }

    res.status(404).json({ error: "User Not Selected...!" });
  } catch (error) {
    res.status(404).json({ error: "Error While Deleting the User...!" });
  }
}
