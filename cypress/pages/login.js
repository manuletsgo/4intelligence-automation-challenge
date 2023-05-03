import Page from './_page'

export default class LoginPage extends Page {
  constructor() {
    super({ path: '/login/' })

    this.h1Title = '.form h1'
    this.h2SubTitle = '#customer_login .col-1 h2'

    this.inputEmail = 'input[data-testid="email"]'
    this.inputPassword = 'input[data-testid="senha"]'
    this.buttonLogin = 'button[data-testid="entrar"]'
  }

  validatePage() {
    cy.get(this.h1Title).should('be.visible').should('have.text', 'Login')
  }

  fillData() {
    cy.get(this.inputEmail).should('be.visible').type('emanuele4dev@gmail.com')
    cy.get(this.inputPassword).should('be.visible').type('aseij@@#233aAPO')
  }

  submitLogin() {
    cy.get(this.buttonLogin).should('be.visible').click()
  }
}
