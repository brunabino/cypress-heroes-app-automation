import userData from '../fixtures/user-data.json'
import MainPage from '../pages/main-page'


const Chance = require ('chance')
const mainPage = new MainPage()


// Cypress.on('uncaught:exception', (err, runnable) => {
//   return false;
// });

describe('Success', () => {
  it('SignIn as Normal User', () => {
    mainPage.accessLoginPage()
    mainPage.accessWithAnyUser(userData.userSuccessNormal.username, userData.userSuccessNormal.password)
    mainPage.mainPageHeroes()
  })

  it('SignIn as Admin User', () => {
    mainPage.accessLoginPage()
    mainPage.accessWithAnyUser(userData.userSuccessAdmin.username, userData.userSuccessAdmin.password)
    mainPage.accessWithAdminUser(chance.name(), chance.integer({ min: 1, max: 9999 }), chance.integer({ min: 0, max: 999 }), chance.integer({ min: 0, max: 500 }), 'avatar01.jpg'  )
  })
}) 


describe('Failure', () => {
  it('SignIn - Failure', () => {
    mainPage.accessLoginPage()
    mainPage.accessWithAnyUser(userData.userFailure.username, userData.userFailure.password)
  })
})
