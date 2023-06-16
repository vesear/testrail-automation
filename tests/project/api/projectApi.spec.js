import { projectServices } from "../../../services/api/projectServices.js";
import { generateProjectData } from "../../../utils/generateProjectData.js";
import { expect } from "chai";
import { STATUS_CODES } from "../../../constants/statusCodes.js";

const apiProject = {
  name: generateProjectData(),
  announcement: generateProjectData(),
  show_announcement: true,
  suite_mode: 1,
};

const NON_EXISTENT_PROJECT_ID = 11111;

const INCORRECT_PROJECT_ID_ERROR_MESSAGE =
  "Field :project_id is not a valid or accessible project.";

describe("GET get_project", async () => {
  it("Get project positive", async () => {
    //ARRANGE
    const addedProject = await projectServices.addProject(apiProject);
    const projectId = addedProject.data.id;
    console.log(addedProject.data);

    // TEST

    const response = await projectServices.getProject(projectId);

    // ASSERT
    const statusCode = response.status;
    const data = response.data;

    expect(statusCode).to.be.eql(STATUS_CODES.OK);
    expect(data.id).to.be.eql(projectId);
    expect(data.name).to.be.eql(apiProject.name);

    expect(data.groups).to.be.empty;
  });

  it("Get project negative", async () => {
    try {
      await projectServices.getProject(NON_EXISTENT_PROJECT_ID);
    } catch (e) {
      expect(e.response.status).to.be.eql(STATUS_CODES.BAD_REQUEST);
      expect(e.response.data.error).to.be.eql(
        INCORRECT_PROJECT_ID_ERROR_MESSAGE
      );
    }
  });

  afterEach(async () => {
    await projectServices.deleteAllProjects();
  });
});
