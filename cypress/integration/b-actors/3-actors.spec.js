/// <reference types="cypress" />

describe('GIVEN a user navigated to _login_ page', () => {
  before(() => {
    // Arrange
    cy.visit('/')
    cy.get('a[href$=login]').click()
  })
  context('WHEN click on _reset_ button ', () => {
    before(() => {
      // Act
      cy.get('button[type=reset]').click()
    });
    it('THEN should _submit_ is disabled ', () => {
      // Assert
      cy.get('button[type=submit').should('be.disabled')
    });
  });
  context('WHEN fill the form ', () => {
    before(() => {
      // Act
      cy.get('input[name=email]').type('invalid@world.org')
      cy.get('input[name=password]').type('invalidPassword')
    });
    it('THEN should _submit_ is enabled ', () => {
      // Assert
      cy.get('button[type=submit').should('be.enabled')
    });
    // it('should clear inputs on reset click', () => {
    //   cy.get('button[type=reset]').click()
    //   cy.get('input[name=email]').should('be.empty')
    // })
  });
});

describe('GIVEN the login form filled ', () => {
  before(() => {
    cy.log('GIVEN before ')
    cy.visit('/login', {
      failOnStatusCode: Cypress.env('failOnStatusCode')
    })
    //cy.get('a[href$=login]').click()
  })
  beforeEach(() => {
    cy.log('GIVEN beforeEach ')
    cy.get('input[name=email]').type('invalid@world.org')
    cy.get('input[name=password]').type('invalidPassword')
  })
  context('WHEN click on _reset_ button ', () => {
    beforeEach(() => {
      cy.log('WHEN first beforeEach ')
      cy.get('button[type=reset]').click()
    });
    it('THEN should clear inputs ', () => {
      cy.get('input[name=email]').should('be.empty')
      cy.get('input[name=password]').should('be.empty')
    });
  });
  context('WHEN click on _login_ button ', () => {
    beforeEach(() => {
      cy.log('WHEN second beforeEach ')
      cy.wait(1000)
      cy.get('button[type=submit]').click()
    });
    it('THEN should display not found message', () => {
      cy.get('aside').contains('Not found')
    });
  });
});

