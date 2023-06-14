import axios from "axios";

const ENDPOINTS = {
  ADD_PROJECT: "https://avesear.testrail.io/index.php?/api/v2/add_project",
};

const addProject = async (project, auth) => {
  await axios.post(ENDPOINTS.ADD_PROJECT, project, { auth });
};

export const projectServices = {
  addProject,
};
