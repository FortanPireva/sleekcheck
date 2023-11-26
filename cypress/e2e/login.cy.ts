/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

import DATATEST_IDS from "../../src/utils/datatest_ids";
// Cypress E2E Test
describe('Login', () => {
  beforeEach(() => { })
  it('should dashboard when loging in with successful data', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/login')

    // click on input and type username
    cy.get(`input[data-testid="${DATATEST_IDS.LOGIN_INPUT_EMAIL}"]`).type('admin@gmail.com')
    // click on input and type password
    cy.get(`input[data-testid="${DATATEST_IDS.LOGIN_INPUT_PASSWORD}"]`).type('12345678')

    // Find a link with an href attribute containing "about" and click it
    cy.get(`button[data-testid="${DATATEST_IDS.LOGIN_BUTTON}"]`).click()

    // cy.intercept('POST', '*', {
    //   statusCode: 200,
    //   body: {
    //     message: 'Successful login'
    //   }
    // }).as('login')
    // cy.wait('@login')
    // The new url should include "/dashboard"
    cy.url().should('include', '/dashboard')
  })
  it('should show error message when loging in with wrong data', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/login')

    // click on input and type username
    cy.get(`input[data-testid="${DATATEST_IDS.LOGIN_INPUT_EMAIL}"]`).type('fortan@gmail.com')
    // click on input and type password
    cy.get(`input[data-testid="${DATATEST_IDS.LOGIN_INPUT_PASSWORD}"]`).type('12345678')

    // Find a link with an href attribute containing "about" and click it
    cy.get(`button[data-testid="${DATATEST_IDS.LOGIN_BUTTON}"]`).click()
    // cy.intercept('POST', '/api/auth/login', {
    //   statusCode: 401,
    //   body: {
    //     message: 'Email or password is incorrect'
    //   }
    // }).as('loginfail')
    // cy.wait('@loginfail')

    // email field should include error state
    cy.get(`input[data-testid="${DATATEST_IDS.LOGIN_INPUT_EMAIL}"]`).should('have.class', 'error')
    // password field should include error state
    cy.get(`input[data-testid="${DATATEST_IDS.LOGIN_INPUT_PASSWORD}"]`).should('have.class', 'error')


  })
})

// Prevent TypeScript from reading file as legacy script
export { }
