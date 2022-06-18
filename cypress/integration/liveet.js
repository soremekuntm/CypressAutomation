/// <reference types= "cypress" />
describe('Liveet Test Suite', () => {
  it('To ensure that a user create an organizer', () => {
    //it block starts here
    //Write your test in the it block
    //Open the trello website
    cy.visit('https://admin-stg.liveet.co/event-admin/auth/signin')
    cy.get(':nth-child(3) > .form-control').type('quales01')
    cy.get(':nth-child(5) > .form-control').type('quales')
    cy.get('.btn').click()
    cy.get('.notification').should('be.visible')
    cy.get(':nth-child(3) > .nav-link > .pcoded-micon').click()
    //cy.contains is an alternative means to spy on page elements using cypress
    cy.contains('Add Organizer').should('be.visible').click()
    cy.get('#OrganizationName').type('Chinedu')
    cy.get('#OrganizationEmail').type('Chined1234@quales.test')
    cy.get('#OrganizationPhone').type('+441124567876')
    cy.get('#OrganizationAddress').type('Sanfransico 2000 street')
    cy.get('#OrganizationUsername').type('Chi003')
    cy.get('#OrganizationPassword').type('Password123*&')
    cy.contains('Create Organizer').click()
    cy.get('.notification').should('be.visible')
  }) //it block terminates here