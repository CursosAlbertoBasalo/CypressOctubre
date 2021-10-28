/// <reference types="cypress" />

cy.on('uncaught:exception', (error) => {
  if (error.message.includes('Expected error')) {
    return false;
  }
})

before(() => {
  cy.log('Global Before');
});
beforeEach(() => {
  cy.log('Global Before Each');
});
afterEach(() => {
  cy.log('Global After Each');
});
after(() => {
  cy.log('Global After');
});
