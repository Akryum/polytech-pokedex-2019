// https://docs.cypress.io/api/introduction/api.html

describe('Pokemon details page', () => {
  it('Go to pokemon details page', () => {
    cy.visit('/')
    // Waiting for demonstration purpose
    cy.wait(1000)
    cy.get('.pokemons')
    // Waiting for demonstration purpose
    cy.wait(1000)
    cy.get('.pokemon-list-item').eq(2).click()
    // Waiting for demonstration purpose
    cy.wait(1000)
    cy.get('.number')
  })
})
