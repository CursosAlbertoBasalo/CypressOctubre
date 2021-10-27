/// <reference types="cypress" />
import { ProjectsAddPage } from '../../support/pages/projects-add.page';

describe('GIVEN the dashboard on the _home_ page', () => {
  beforeEach(() => {
    // Arrange
    // intercepts the requests and responds with predefined data
    cy.intercept(
      'GET', // http method
      Cypress.env('apiUrl') + 'projects', // url
      { fixture: 'projects' } // static response
    ).as('getProjects');
    cy.visit('/');
  });
  context('WHEN get projects loaded from the API', () => {
    beforeEach(() => {
      // Act
      cy.waitFor('@getProjects');
    });
    it('THEN should display those projects', () => {
      // Assert
      cy.get('ab-projects ab-card').should('have.length', 2);
    });
  });
});

describe('GIVEN the _Add new project_ page, connected to a teapot', () => {
  const projectsAddPage = new ProjectsAddPage();
  beforeEach(() => {
    // Arrange
    projectsAddPage.visit();
    // intercept of post request and responds with an error
    cy.intercept(
      'POST', // method
      Cypress.env('apiUrl') + 'projects', // url
      {
        statusCode: 418, // forced error response (teapot)
        body: { data: {} }, // empty response
      },
    ).as('postProject'); // alias for the request
  });
  context('WHEN fill the form and submit to the teapot', () => {
    beforeEach(() => {
      // Act
      projectsAddPage.fillCorrectly();
      projectsAddPage.submitForm();
    });
    it('THEN data should be posted ', () => {
      // Assert
      cy.wait('@postProject') // wait for the request to be done and assert with a function
        .then(intercepted => {
          // check that the project was posted
          expect(intercepted.request.body.name) // assert using the intercepted request
            .to.deep.eq('Collapse the global traffic'); // check the request body
        });
    });
  });
});