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
            cy.get(('.settings-menu-toggle > span > svg')).click()
            cy.get(('form > .gh-btn > span > svg')).click()
            cy.get(('#ember277')).click()
            cy.get(('[id=ember278]')).click()

            
            
            
            
  })


})