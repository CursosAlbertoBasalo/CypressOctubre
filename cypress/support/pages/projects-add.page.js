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


  // To do: implement getters for every control

}