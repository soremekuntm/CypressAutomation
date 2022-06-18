/// <reference types= "cypress" />
describe('Instagram Regression Test suite', () => {
    it('Validate that a user cannot login to instagram with invalid credentials', () => {
      //it block starts here
      //Write your test in the it block
      //Open instagram.
      cy.visit('https://www.instagram.com/')
      //Cypress gets the input field for instagram's username field
      cy.get(':nth-child(1) > ._9GP1n > .f0n8F > ._2hvTZ')
        //Cypress will type in a username
        .type('test@quales.tech')
      //Cypress gets the password field for instagram's username field
      cy.get(':nth-child(2) > ._9GP1n > .f0n8F > ._2hvTZ').type('fakepassword')
      //Click login
      cy.get(':nth-child(3) > .sqdOP').click()
      //Cypress gets the error message on instagram
      cy.get('[data-testid=login-error-message]')
      // Cypress should check if this message is visible
      .should('be.visible')
    }) //it block terminates herenpx cypress open