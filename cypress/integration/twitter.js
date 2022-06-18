/// <reference types= "cypress" />
describe('Liveet Test Suite', () => {
    it('To ensure that a user create an organizer', () => {
        //open twitter
        cy.visit("https://twitter.com")