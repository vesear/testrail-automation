import { projectServices } from "../../../services/api/projectServices.js";
import { generateProjectData } from "../../../utils/generateProjectData.js";
import { expect } from "chai";

const apiProject = {
  name: generateProjectData(),
  announcement: generateProjectData(),
  show_announcement: true,
  suite_mode: 1,
};

const STATUS_CODES = {
  OK: 200,
  INVALID_PROJECT: 400,
  NO_ACCESS: 403,
  TOO_MANY_REQUESTS: 429,
};

describe("Project API test", async () => {
  it("Get project positive", async () => {
    const addedProject = await projectServices.addProject(apiProject);
    await projectServices.getProject(addedProject.data.id);

    expect(addedProject.data.name).to.be.eql(apiProject.name);
    expect(addedProject.data.announcement).to.be.eql(apiProject.announcement);
    expect(addedProject.data.show_announcement).to.be.eql(
      apiProject.show_announcement
    );
    expect(addedProject.status).to.be.eql(200);

    await projectServices.deleteAllProjects();
  });
  it("Get project negative", async () => {
    try {
      const response = await projectServices.getProject(11111);
    } catch (e) {
      expect(e.response.status).to.be.eql(STATUS_CODES.INVALID_PROJECT);
    }
  });
});
