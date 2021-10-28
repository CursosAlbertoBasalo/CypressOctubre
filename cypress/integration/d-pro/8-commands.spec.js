/// <reference types="cypress" />

import { ProjectsAddPage } from '../../support/pages/projects-add.page';

describe('GIVEN an authenticated user ', () => {
  before(() => {
    // cy.loginForm();
    // cy.loginRequest();
    cy.loginStorage();
  })
  context('WHEN submits a new project', () => {
    const projectsAddPage = new ProjectsAddPage()
    before(() => {
      cy.intercept('POST', Cypress.env('apiUrl') + "projects/",).as('postProject');
      projectsAddPage.visit();
      projectsAddPage.fillCorrectly();
      projectsAddPage.submitForm();
    });
    it('THEN should send auth token', () => {

      cy.wait('@postProject').its('request.headers.authorization').should('contain', 'Bearer ');
    })
    it('THEN should be redirected to home ', () => {
      cy.location('pathname').should('contain', '/angular-budget/');
    });
    after(() => {
      cy.get('[data-test-id="collapse_the_global_traffic"] [data-test-id="delete"]').click();
      cy.get('.modal-card-foot > .is-success').click();
    })
  });
});