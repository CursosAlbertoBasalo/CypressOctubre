/// <reference types="cypress" />


describe('The budget home page', () => {

  before(() => {
    //cy.visit('https://angularbuilders.github.io/angular-budget/');
  })
  beforeEach(() => {
    cy.visit('https://angularbuilders.github.io/angular-budget/');
  })

  it('should display the application name', () => {
    cy.contains('Budget')
  })
  it('should display the app name on an anchor', () => {
    cy.get('a').should('contain', 'Budget');
  })
  it('should display the app name with a given style class', () => {
    cy.get('.navbar-brand').should('contain', 'Budget');
  })
  it('should display the app name on a precise identifier', () => {
    cy.get('#app-name').should('contain', 'Budget');
  });
  it('should display the app name on a precise node', () => {
    // A selector precise, but code intrusive
    cy.get('[data-test-id="app-name"]').should('contain', 'Budget');
  })
  it('should display the app name on something acting as banner', () => {
    // A selector based on a useful attribute: role, name, placeholder etc.
    cy.get('[role=banner]').should('contain', 'Budget');
  });

  it('should have the app name on the title', () => {
    cy.title().should('contain', 'Budget');
  })

})


// Arrange Act Assert

//


describe('GIVEN the home page ', () => {
  context('WHEN search for the title brand ', () => {
    before(() => {
      cy.visit('https://angularbuilders.github.io/angular-budget/')
    });
    it('THEN should display _Budget_ ', () => {
      cy.title().should('contain', 'Budget');
    });
  });
});