/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

import DATATEST_IDS from "../../src/utils/datatest_ids";
// Cypress E2E Test
describe('Login', () => {
    it('should dashboard when loging in with successful data', () => {
      // Start from the index page
      cy.visit('http://localhost:3000/login')
  
      // click on input and type username
      cy.get(`input[data-testid="${DATATEST_IDS.LOGIN_INPUT_EMAIL}"]`).type('admin@gmail.com')
      // click on input and type password
       cy.get(`input[data-testid="${DATATEST_IDS.LOGIN_INPUT_PASSWORD}"]`).type('12345678')

      // Find a link with an href attribute containing "about" and click it
      cy.get(`button[data-testid="${DATATEST_IDS.LOGIN_BUTTON}"]`).click()

      // The new url should include "/dashboard"
       cy.url().should('include', '/dashboard')
    })
  })
  
  // Prevent TypeScript from reading file as legacy script
  export {}
  