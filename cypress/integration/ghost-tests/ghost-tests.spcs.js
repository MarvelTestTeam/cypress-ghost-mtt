/// <reference types="cypress" />

context('ghost-tests', () => {

    it('Visits ghost aignin', () => {
        cy.visit('http://localhost:2368/ghost/#/signin')
    })
    
    it('Signin to ghost', () => {
        cy.get('#ember7') 
          .type('jorgeballe@gmail.com') 
        cy.get('#ember9') 
          .type('Asdfg12345!')
        cy.get('#ember11').click()
    })
    
})