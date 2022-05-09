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
            cy.contains(('Tags')).click()
            cy.contains(('New tag')).click()
            cy.get(('#tag-name')).type('tag nuevo')
            cy.get(('.input-color > .gh-input')).type('tabhti')
            cy.get(('[id=ember66]')).click()
            
            
            
  })


})
