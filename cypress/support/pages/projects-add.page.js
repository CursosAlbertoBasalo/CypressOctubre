/// <reference types="cypress" />

const newProject = {
  name: 'Collapse the global traffic',
  budget: 666666,
  starDate: '2021-03-01'
}

export class ProjectsAddPage {

  visit() {
    cy.visit('/projects/add', { "failOnStatusCode": false })
  }

  fillCorrectly() {
    cy.fixture('new-project'). // load input data from json file
      then((newProject) => {
        cy.get('input[name=name]').type(newProject.name);
        cy.get('input[name=budget]').type(newProject.budget);
        cy.get('input[name=startDate]').type(newProject.starDate);
      });
  }

  clearForm() {
    cy.get('input[name=name]').clear();
    cy.get('input[name=budget]').clear();
    cy.get('input[name=startDate]').clear();
  }


  getResetButton() {
    return cy.get('button[type=reset]');
  }

  resetForm() {
    this.getResetButton().click();
  }

  getSubmitButton() {
    return cy.get('button[type=submit]');
  }

  submitForm() {
    this.getSubmitButton().click();
  }

  submitRequest() {
    cy.fixture('new-project').
      then((newProject) => {
        cy.request({
          "method": "POST",
          "url": Cypress.env('apiUrl') + "projects/",
          "body": newProject,
          "headers": {
            "authorization": "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IndvcmxkX2FkbWluIiwic3RrIjoiMTYzNTQzMjgzMDM3OSIsImlhdCI6MTYzNTQzMjgzMH0.47LfFaJUdRp2MYtkov4OzpQZ3itrEDG2-OvU6fVdeW0"
          }
        });
      });
  }


  submitDeleteRequest() {
    cy.request({
      "method": "DELETE",
      "url": Cypress.env('apiUrl') + "projects/" + 'collapse_the_global_traffic',
      "headers": {
        "authorization": "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IndvcmxkX2FkbWluIiwic3RrIjoiMTYzNTQzMjgzMDM3OSIsImlhdCI6MTYzNTQzMjgzMH0.47LfFaJUdRp2MYtkov4OzpQZ3itrEDG2-OvU6fVdeW0"
      }
    });
  }


  // To do: implement getters for every control

}