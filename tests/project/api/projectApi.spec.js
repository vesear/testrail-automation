import { projectServices } from "../../../services/api/projectServices.js";
import { generateProjectData } from "../../../utils/generateProjectData.js";
import { expect } from "chai";
import { STATUS_CODES } from "../../../constants.js";

const apiProject = {
  name: generateProjectData(),
  announcement: generateProjectData(),
  show_announcement: true,
  suite_mode: 1,
};

describe("Project API test", async () => {
  it("Get project positive only", async () => {
    const addedProject = await projectServices.addProject(apiProject);
    const neededProject = await projectServices.getProject(
      addedProject.data.id
    );

    expect(addedProject.data.name).to.be.eql(neededProject.data.name);
    expect(addedProject.data.announcement).to.be.eql(
      neededProject.data.announcement
    );
    expect(addedProject.data.show_announcement).to.be.eql(
      neededProject.data.show_announcement
    );
    expect(neededProject.status).to.be.eql(STATUS_CODES.OK);

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
