import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

import LoginPage from '../../pages/login'
import HomePage from '../../pages/home'

Given('its on login page', () => {
  const loginPage = new LoginPage()
  loginPage.goto()
  loginPage.validatePage()
})

When('fill login data', () => {
  const loginPage = new LoginPage()
  loginPage.fillData()
})

When('click on login button', () => {
  const loginPage = new LoginPage()
  loginPage.submitLogin()
})

Then('the user should be logged', () => {
  const homePage = new HomePage()
  homePage.validatePage()
})
