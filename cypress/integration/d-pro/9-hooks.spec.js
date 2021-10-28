/// <reference types="cypress" />

describe('GIVEN a feature ', () => {
  before(() => {
    cy.log('Suite Before')
  })
  beforeEach(() => {
    cy.log('Suite Before Each')
  })
  context('WHEN an scenario one', () => {
    before(() => {
      cy.log('Case Before one')
    });
    beforeEach(() => {
      cy.log('Case Before Each one')
    })
    it('THEN should have a behavior one.one', () => {
      cy.log('behavior one.one')
    });
    it('THEN should have a behavior one.two', () => {
      cy.log('behavior one.two')
    });
    afterEach(() => {
      cy.log('Case After Each one')
    })
    after(() => {
      cy.log('Case After one')
    })
  });
  context('WHEN an scenario two', () => {
    before(() => {
      cy.log('Case Before two')
    });
    beforeEach(() => {
      cy.log('Case Before Each two')
    })
    it('THEN should have a behavior two.one', () => {
      cy.log('behavior two.one')
    });
    it('THEN should have a behavior two.two', () => {
      cy.log('behavior two.two')
    });
    afterEach(() => {
      cy.log('Case After Each two')
    })
    after(() => {
      cy.log('Case After two')
    })
  });
  afterEach(() => {
    cy.log('Suite After Each')
  })
  after(() => {
    cy.log('Suite After')
  })
});