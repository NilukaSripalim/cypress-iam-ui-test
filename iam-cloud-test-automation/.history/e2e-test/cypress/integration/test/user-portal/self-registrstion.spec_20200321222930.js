
import LandingPage from '../../pages/landing_page'

describe('Login tests', function () {
    const landingPage = new LandingPage()

    before(function () {
      cy.clearCookies()
    })

    beforeEach(function () {
      cy.visit('/user-portal')
    })

//    it('does not allow non admin user access', function () {
//      // Login as normal user
//      loginPage.loginUser(Cypress.env('LMS_USER_EMAIL'), Cypress.env('LMS_USER_PASSWORD'))
//      // Check that enterprise list container is not present
//      landingPage.enterpriseListContainer().should('not.exist')
//    })

    it('allows admin user access on application after lopgin', function () {
      // Login as admin user
//      loginPage.loginUser(Cypress.env('ADMIN_USER_EMAIL'), Cypress.env('ADMIN_USER_PASSWORD'))
      // Check that enterprise list container is present
      landingPage.getPageTitle().should('exist')
    })
  })