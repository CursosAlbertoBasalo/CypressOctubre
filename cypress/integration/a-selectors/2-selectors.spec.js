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


// ✅ Considere using snippets

// cy-b
before(() => {

})
// cy-b-e
beforeEach(() => {

})
// cy-it
it('should do something', () => {

})
// cy-d-it
describe('an scenario', () => {
  it('should do something', () => {

  })
})
it('should do something', () => {

})

// ✅ Considere use a more readable tests suite
// Applying the Given, When, Then pattern
// Inspired from Behavior Driven Development

// cy-gwt
describe('GIVEN a product feature ', () => {
  context('WHEN an scenario ', () => {
    before(() => {

    });
    it('THEN should have a behavior ', () => {
    });
  });
});

// ❌ Avoid test jargon
// sut, input, actual, expected
// Too formal for cypress


// 📋 To do:
// - there are an h1 with page title
// - there are link to about page
// - there are a footer with doc-credits

