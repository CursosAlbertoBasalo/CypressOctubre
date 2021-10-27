/// <reference types="cypress" />

describe('GIVEN the "about" link on the "home" page ', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('a[href$=about]').as('aboutLink') // save with an alias
  })
  context('WHEN I click it  ', () => {
    beforeEach(() => {
      cy.get('@aboutLink') // look for the alias saved
        .click()
    });
    it('THEN should display "About" as the title ', () => {
      cy.get('.title').should('contain', 'About');
    });
  });
});