import { generateProjectData } from "../../../utils/generateProjectData.js";
import { projectServices } from "../../../services/api/projectServices.js";
import { expect } from "chai";
import { STATUS_CODES } from "../../../constants/statusCodes.js";

const apiProject = {
  name: generateProjectData(),
  announcement: generateProjectData(),
  show_announcement: true,
  suite_mode: 1,
};

const negativeCaseProject = {
  name: "",
  show_announcement: 4,
  suite_mode: 18,
};

const errorMessage = "Field :name is a required field.";

describe("POST add_project", async () => {
  it("Add project positive", async () => {
    const newProject = await projectServices.addProject(apiProject);
    await validateProject(newProject.data, apiProject);
  });
  it("Add new project negative", async () => {
    try {
      await projectServices.addProject(negativeCaseProject);
    } catch (e) {
      expect(e.response.status).to.be.eql(STATUS_CODES.BAD_REQUEST);
      expect(e.response.data.error).to.be.eql(errorMessage);
    }
  });
});

const validateProject = (actual, expected) => {
  expect(actual.name).to.be.eql(expected.name);
  expect(actual.announcement).to.be.eql(expected.announcement);
  expect(actual.show_announcement).to.be.eql(expected.show_announcement);
  expect(actual.suite_mode).to.be.eql(expected.suite_mode);
  expect(actual).to.haveOwnProperty("id");
  expect(actual.id).to.be.a("number");
};
