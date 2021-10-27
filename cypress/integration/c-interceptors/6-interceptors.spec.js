/// <reference types="cypress" />
import { ProjectsAddPage } from '../../support/pages/projects-add.page';

describe('GIVEN the dashboard on the _home_ page', () => {
  beforeEach(() => {
    cy.intercept(Cypress.env('apiUrl') + 'projects/', {
      "fixture": "projects",
      "delay": 500,
    }).as('getProjects');
    cy.visit('/');
  })
  context('WHEN get projects loaded from the API', () => {
    beforeEach(() => {
      cy.waitFor('@getProjects');
    });
    it('THEN should display those projects', () => {
      cy.get('ab-projects ab-card').should('have.length', 2);
    });
  });
});

describe('GIVEN the _Add new project_ page, connected to a teapot', () => {
  const projectsAddPage = new ProjectsAddPage();
  before(() => {
    projectsAddPage.visit();
    cy.intercept(
      'POST',
      Cypress.env('apiUrl') + 'projects/',
      {
        "body": { data: {} },
        "statusCode": 418
      }
    ).as('postProject');
  })
  context('WHEN fill the form and submit to the teapot', () => {
    before(() => {
      projectsAddPage.fillCorrectly();
      projectsAddPage.submitForm();
    });
    it('THEN data should be posted', () => {
      cy.wait('@postProject').then(intercepted => {
        expect(intercepted.request.body.name).to.be.eq('Collapse the global traffic')
      })
    });
  });
});