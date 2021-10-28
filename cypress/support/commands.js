// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginForm', () => {
  cy.visit('login', { failOnStatusCode: false });
  cy.get('input[name=email]').type('admin@world.org');
  cy.get('input[name=password]').type('S3cr3t');
  cy.get('button[type=submit]').click();
})

Cypress.Commands.add('loginRequest', () => {
  const url = Cypress.env('apiUrl') + "users/credentials?email=admin%2540world.org&password=S3cr3t"
  cy.request(url).then(response => {
    const security = {
      loggedIn: true,
      token: response.body.data
    }
    window.localStorage.setItem('security', JSON.stringify(security));
  })
})

Cypress.Commands.add('loginStorage', () => {
  const security = {
    loggedIn: true,
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IndvcmxkX2FkbWluIiwic3RrIjoiMTYzNTQzMjgzMDM3OSIsImlhdCI6MTYzNTQzMjgzMH0.47LfFaJUdRp2MYtkov4OzpQZ3itrEDG2-OvU6fVdeW0"
  }
  window.localStorage.setItem('security', JSON.stringify(security));
})