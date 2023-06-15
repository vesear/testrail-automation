import { axiosInstance } from "../../api/axiosInstance.js";

const ENDPOINTS = {
  ADD_PROJECT: "index.php?/api/v2/add_project",
  GET_PROJECTS: "index.php?/api/v2/get_projects",
  DELETE_PROJECT: "index.php?/api/v2/delete_project/",
  GET_PROJECT: "index.php?/api/v2/get_project/",
  UPDATE_PROJECT: "index.php?/api/v2/update_project/",
};

const addProject = async (project) => {
  return await axiosInstance.post(ENDPOINTS.ADD_PROJECT, project);
};

const deleteAllProjects = async () => {
  const response = await axiosInstance.get(ENDPOINTS.GET_PROJECTS);
  const projects = response.data?.projects ?? [];
  const deleteRequests = projects.map((project) => {
    return axiosInstance.post(`${ENDPOINTS.DELETE_PROJECT}${project.id}`, null);
  });
  await Promise.all(deleteRequests);
};

const getProject = async (id) => {
  const project = await axiosInstance.get(`${ENDPOINTS.GET_PROJECT}${id}`);
  console.log(project);
};

export const projectServices = {
  addProject,
  deleteAllProjects,
  getProject,
};
