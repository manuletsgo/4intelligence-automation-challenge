import 'cypress-plugin-api'

export default class Rest {
  static get({ endpoint, headers }) {
    return cy.request({
      method: 'GET',
      url: endpoint,
      headers,
      failOnStatusCode: false
    })
  }

  static post({ endpoint, body, headers }) {
    return cy.request({
      method: 'POST',
      url: endpoint,
      body,
      headers,
      failOnStatusCode: false
    })
  }

  static put({ endpoint, body, headers }) {
    return cy.request({
      method: 'PUT',
      url: endpoint,
      body,
      headers,
      failOnStatusCode: false
    })
  }

  static delete({ endpoint, headers }) {
    return cy.request({
      method: 'DELETE',
      url: endpoint,
      headers,
      failOnStatusCode: false
    })
  }
}
