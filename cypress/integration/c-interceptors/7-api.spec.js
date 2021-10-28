/// <reference types="cypress" />

describe('WHEN: make a get _projects_ request', () => {
  it('should get an array with 1 or more items', () => {
    cy.request(Cypress.env('apiUrl') + 'projects/').then(response => {
      expect(response.body.data).to.have.length.above(1);
    })
  })
})

describe('WHEN: make a delete request', () => {
  it('THEN: should get either a _not authenticated_ a _deleted_ or _not found_ response', () => {
    cy.request({
      method: 'DELETE',
      url: Cypress.env('apiUrl') + 'projects/' + 'conquer_mars',
      body: {},
      failOnStatusCode: false,
    }).then(response => {
      expect(response.status).to.be.oneOf([401, 403, 200, 204, 404]);
    })
  })
})