/// <reference types="cypress" />

// Posibles mejoras o cambios

import { ProjectsAddPage } from '../../support/pages/projects-add.page';

describe('GIVEN an authenticated user ', () => {
  before(() => {
    // cy.loginForm();
    // cy.loginRequest();
    // cy.loginStorage();
  })
  context('WHEN submits a new project', () => {
    const projectsAddPage = new ProjectsAddPage()
    before(() => {
      const addedProject = {
        id: 'collapse_the_global_traffic',
        name: 'Collapse the global traffic',
        budget: 666666,
        starDate: '2021-03-01'
      }
      cy.intercept('POST', Cypress.env('apiUrl') + "projects/", {
        statusCode: 201,
        body: { data: addedProject }
      }).as('postProject');
      projectsAddPage.visit();
      projectsAddPage.fillCorrectly();
      projectsAddPage.submitForm();
      //projectsAddPage.submitRequest();
    });
    it('THEN should send auth token', () => {
      cy.wait('@postProject').its('request.headers.authorization').should('contain', 'Bearer ');
    })
    it('THEN should be redirected to home ', () => {
      cy.location('pathname').should('contain', '/angular-budget/');
    });
    after(() => {
      // projectsAddPage.submitDeleteRequest();
      // cy.visit('/');
      // cy.get('[data-test-id="collapse_the_global_traffic"] [data-test-id="delete"]').click()
      // cy.get('.modal-card-foot > .is-success').click()
    })
  });
});