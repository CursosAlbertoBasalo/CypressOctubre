/// <reference types="cypress" />


// 📋 To do:
// - there are an h1 with page title

// - there are link to about page

// - there are a footer with doc-credits

// - there are no orphaned links

describe('The _budget_ home page', () => {
  before(() => {
    cy.visit('https://angularbuilders.github.io/angular-budget/')
  })
  it('should have an h1 with the page title', () => {
    cy.get('h1').should('contain', 'Budget')
  })
  it('should have a link to the _about_ page', () => {
    cy.get('a')
      .contains('About')
      .should('have.attr', 'href', '/angular-budget/about')
  })
  it('should have a footer with role _"doc-credits_', () => {
    cy.get('[role="doc-credits"]').within(() => {
      cy.root().parent().should('include.html', 'footer')
    })
  })
  it('should not have orphaned links', () => {
    cy.get('a').should('not.have.attr', 'href', "#undefined")
    cy.get('a').each(a => expect(a).to.not.have.attr('href', 'undefined'))
  })
})