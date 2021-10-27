/// <reference types="cypress" />

import { ProjectsAddPage } from '../../support/pages/projects-add.page';

describe('GIVEN a user that goes to the _projects add_ page ', () => {
  before(() => {
    cy.visit('/');
    cy.contains('Add new project').click();
  })
  context('WHEN fills the form correctly', () => {
    let projectsAddPage;
    before(() => {
      projectsAddPage = new ProjectsAddPage();
      projectsAddPage.fillCorrectly();
    });
    it('THEN should be able to submit ', () => {
      projectsAddPage.getSubmitButton().should('be.enabled');
    });
  });
});

describe('GIVEN a _projects add_ form already filled ', () => {
  let projectsAddPage;
  beforeEach(() => {
    projectsAddPage = new ProjectsAddPage();
    projectsAddPage.visit();
    projectsAddPage.fillCorrectly();
  })
  context('WHEN the user submits the form', () => {
    beforeEach(() => {
      projectsAddPage.submitForm();
    });
    it('THEN should change the location ', () => {
      cy.location('pathname').should('not.contain', 'add');
    });
  });
  context('WHEN the user clears the form', () => {
    beforeEach(() => {
      projectsAddPage.resetForm()
    });
    it('THEN should not allow submit ', () => {
      projectsAddPage.getSubmitButton().should('be.disabled');
    });
  });
});