const BASE_URL = "http://localhost:3000";

// get all assignments
export const getAssignments = async () => {
  const response = await fetch(`${BASE_URL}/api/assignments`);
  const json = await response.json();
  return json;
};

// get an assignment
export const getAssignment = async (assignmentId) => {
  const response = await fetch(`${BASE_URL}/api/assignments/${assignmentId}`);
  const json = await response.json();
  if (json) return json;
  return {};
};

// post a new assignment
export const addNewAssignment = async (formData) => {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    const response = await fetch(`${BASE_URL}/api/assignments`, options);
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
};

// update an assignment
export const updateAssignment = async (assignmentId, formData) => {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };
  const response = await fetch(
    `${BASE_URL}/api/assignments/${assignmentId}`,
    options
  );
  const json = await response.json();
  return json;
};
