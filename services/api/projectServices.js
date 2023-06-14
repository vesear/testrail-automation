import axios from "axios";

const ENDPOINTS = {
  ADD_PROJECT: "https://avesear.testrail.io/index.php?/api/v2/add_project",
  GET_PROJECTS: "https://avesear.testrail.io/index.php?/api/v2/get_projects",
  DELETE_ALL_PROJECTS:
    "https://avesear.testrail.io/index.php?/api/v2/delete_project/",
};

const addProject = async (project, auth) => {
  return await axios.post(ENDPOINTS.ADD_PROJECT, project, { auth });
};

const deleteAllProjects = async (auth) => {
  console.log({ auth });
  const response = await axios.get(ENDPOINTS.GET_PROJECTS, { auth });
  const projects = response.data.projects;
  for (const project of projects) {
    await axios.post(`${ENDPOINTS.DELETE_ALL_PROJECTS}${project.id}`, null, {
      auth,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};

export const projectServices = {
  addProject,
  deleteAllProjects,
};
