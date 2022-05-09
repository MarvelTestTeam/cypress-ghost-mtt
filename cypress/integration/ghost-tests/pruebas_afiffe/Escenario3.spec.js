/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:2369/ghost/#/signin')
  })

  // https://on.cypress.io/interacting-with-elements

  it('.type() - type into a DOM element', () => {
    // https://on.cypress.io/type
    cy.get('input[name="identification"]').type('afiffe.retamozo.a@gmail.com')
            cy.get('input[name="password"]').type('Asdfg12345!')
            cy.get(('[id=ember11]')).click()
            cy.get(('[id=ember26]')).click()
            cy.get(('.posts-list > :nth-child(5)')).click()
            cy.get('.koenig-editor__editor-wrapper').type('Esto esta editado.')
            cy.get(('[id=ember235]')).click()
            cy.get(('[id=ember251]')).click()
            cy.get(('[id=ember253]')).click()
            cy.get(('.gh-notification-actions > a')).click()
            
            

            
            
            
            
  })


})