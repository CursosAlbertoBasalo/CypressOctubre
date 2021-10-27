/// <reference types="cypress" />

describe('GIVEN a user navigated to _login_ page', () => {
  before(() => {
    // Arrange
    cy.visit('/');
    cy.get('a[href$=login]') // selects anchor tags with href ending with 'login'
      .click(); // Acts on the selected element
  })
  context('WHEN click on _reset_ button ', () => {
    before(() => {
      // Act
      cy.get('button[type=reset]') // find the reset button
        .click(); // act: on the button
    });
    it('THEN should _submit_ is disabled ', () => {
      // Assert
      cy.get('button[type=submit]') // find the submit button
        .should('be.disabled'); // assert that the button is disabled
    });
  });
  context('WHEN fill the form ', () => {
    before(() => {
      // Act
      cy.get('input[name=email]') // find the email input
        .type('invalid@world.org'); // act: type the email
      cy.get('input[name=password]').type('invalid'); // act: type the password
    });
    it('THEN should _submit_ is enabled ', () => {
      // Assert
      cy.get('button[type=submit]').should('be.enabled'); // assert that the submit button is enabled
    });
  });
});



