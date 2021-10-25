/// <reference types="cypress" />

// describir lo que pasa , entre comillas
// funciones que ejecutan

describe('My first test', () => {
  it('should visit the initial page', () => {
    // act assert
    cy.visit('https://angularbuilders.github.io/angular-budget/')
    cy.contains('Budget')
    cy.get('a').should('contain', 'Budget')
  })
});


// Arrange
// Act
// Assert
