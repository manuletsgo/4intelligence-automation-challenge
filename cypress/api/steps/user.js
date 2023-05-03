import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

import { faker } from '@faker-js/faker'

import User from '../../services/user.service'

import { stateStore } from '../../support/stateStore'

When('create a new user with valid data', () => {
  stateStore.createdUser = {
    nome: faker.name.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(8),
    administrador: 'true'
  }

  User.post_user(stateStore.createdUser).then(res => {
    cy.log('RESPONSE: ' + JSON.stringify(res.body))
    cy.wrap({ res }).as('response')
  })
})

Then('the status code should be 201', () => {
  cy.get('@response').then(({ res }) => {
    expect(res.status).to.eq(201)
  })
})

Then('the body message should be {string}', message => {
  cy.get('@response').then(({ res }) => {
    expect(res.body.message).to.eq(message)
  })
})

Then('the response should contain the ID', () => {
  cy.get('@response').then(({ res }) => {
    expect(res.body._id).to.exist
    expect(res.body._id).to.be.a('string')
    stateStore.createdUser._id = res.body._id
  })
})

When('send a valid ID', () => {
  User.get_user(stateStore.createdUser._id).then(res => {
    cy.log('RESPONSE: ' + JSON.stringify(res.body))
    cy.wrap({ res }).as('response')
  })
})

When('send a valid ID with valid payload', () => {
  stateStore.createdUser.nome = faker.name.fullName()

  const putPayload = (({ nome, email, password, administrador }) => ({
    nome,
    email,
    password,
    administrador
  }))(stateStore.createdUser)

  cy.log(JSON.stringify(stateStore.createdUser))

  User.put_user(stateStore.createdUser._id, putPayload).then(res => {
    cy.log('RESPONSE: ' + JSON.stringify(res.body))
    cy.wrap({ res }).as('response')
  })
})

Then('the status code should be 200', () => {
  cy.get('@response').then(({ res }) => {
    expect(res.status).to.eq(200)
  })
})

Then('the response should contain the data of this user', () => {
  cy.get('@response').then(({ res }) => {
    expect(res.body).to.deep.eq(stateStore.createdUser)
  })
})

Then('the user data should be edited', () => {
  cy.get('@response').then(({ res }) => {
    expect(res.body).to.deep.eq(stateStore.createdUser)
  })
})

When('send a ID created previously', () => {
  User.delete_user(stateStore.createdUser._id).then(res => {
    cy.log('RESPONSE: ' + JSON.stringify(res.body))
    cy.wrap({ res }).as('response')
  })
})
