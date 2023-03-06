const BASE_URL = "http://localhost:3000";

// get all students
export const getStudents = async () => {
  const response = await fetch(`${BASE_URL}/api/users`);
  const json = await response.json();
  return json;
};

// get a student
export const getStudent = async (studentId) => {
  const response = await fetch(`${BASE_URL}/api/users/${studentId}`);
  const json = await response.json();
  if (json) return json;
  return {};
};

// post a new student
export const addNewStudent = async (formData) => {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    const response = await axios.post(`${BASE_URL}/api/users`, options);
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
};

// update a student
export const updateStudent = async (studentId, formData) => {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };

  const response = await axios.put(
    `${BASE_URL}/api/users/${studentId}`,
    options
  );
  const json = await response.json();
  return json;
};

// delete a student
export const deleteStudent = async (studentId) => {
  const Options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.delete(
    `${BASE_URL}/api/users/${studentId}`,
    Options
  );
  const json = await response.json();
  return json;
};
