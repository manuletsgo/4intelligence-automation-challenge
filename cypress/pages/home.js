import Page from './_page'

export default class HomePage extends Page {
  constructor() {
    super({ path: '/home' })

    this.h1Title = '.jumbotron h1'
    this.buttonLogout = 'button[data-testid="logout"]'
  }

  validatePage() {
    cy.get(this.h1Title)
      .should('be.visible')
      .should('have.text', 'Serverest Store')
    cy.get(this.buttonLogout).should('be.visible')
  }
}
