/// <reference types="cypress" />

export class AboutPage {

  visit() {
    cy.visit('/');
    cy.get('a[href$=about]')
      .click();
  }

  constructor() {
    this.visit()
  }

  getTitle() {
    return cy.get('.title')
  }
}