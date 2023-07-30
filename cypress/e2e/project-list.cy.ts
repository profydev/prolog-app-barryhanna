import capitalize from "lodash/capitalize";
import mockProjects from "../fixtures/projects.json";

describe("Project List", () => {
  beforeEach(() => {
    // setup request mock
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      fixture: "projects.json",
    }).as("getProjects");

    // open projects page
    cy.visit("http://localhost:3000/dashboard");

    // wait for request to resolve
    cy.wait("@getProjects");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("renders the projects", () => {
      const languageNames = ["React", "Node.js", "Python"];

      // get all project cards
      cy.get("main")
        .find("li")
        .each(($el, index) => {
          // check that project data is rendered
          cy.wrap($el).contains(mockProjects[index].name);
          cy.wrap($el).contains(languageNames[index]);
          cy.wrap($el).contains(mockProjects[index].numIssues);
          cy.wrap($el).contains(mockProjects[index].numEvents24h);
          cy.wrap($el).contains(capitalize(mockProjects[index].status));
          cy.wrap($el)
            .find("a")
            .should("have.attr", "href", "/dashboard/issues");
        });
    });

    it("handles failure to fetch projects", () => {
      // setup request mock
      cy.intercept("GET", "https://prolog-api.profy.dev/project", {
        statusCode: 500,
      }).as("getProjects");

      // open projects page
      cy.visit("http://localhost:3000/dashboard");

      // wait for request to resolve
      cy.wait("@getProjects");

      cy.contains("There was a problem while loading the project data", {
        timeout: 10000,
      });
    });

    it("properly displays project status with the correct color badge", () => {
      // open projects page
      cy.visit("http://localhost:3000/dashboard");

      // wait for request to resolve
      cy.wait("@getProjects");

      cy.get('[color="error"').should("have.css", "color", "rgb(180, 35, 24)");
      cy.get('[color="success"').should("have.css", "color", "rgb(2, 122, 72)");
      cy.get('[color="warning"').should("have.css", "color", "rgb(181, 71, 8)");
    });
  });
});
