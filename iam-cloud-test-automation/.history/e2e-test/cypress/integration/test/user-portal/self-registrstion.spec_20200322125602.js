
import LandingPage from '../../pages/landing_page'
import * as SelfSignPageLocators from '../../../support/utils/signing-up-locators.js'

describe('Login tests', function () {
  const landingPage = new LandingPage()

  // before(function () {
  //   cy.clearCookies()
  // })

  // before(function() {
  //   cy.visit('/user-portal');

  // });
  before(() => {

    cy.visit('/user-portal');
    cy.clearCookies();

  })

  beforeEach(function () {
    cy.fixture('new-user').as("user");
    // Preserve the cookies for all tests in this suite
    Cypress.Cookies.preserveOnce('SESSION')


  })

  it('1. validate Loading Page', function () {

    landingPage.getinItialLocators();
  })


  it('2. Enter a new user name & Start Procees', function () {
    // validate form title in self-signin page
    if (SelfSignPageLocators.sr_form_title() && SelfSignPageLocators.username_label) {

      cy.get('@user')
        .then(user => {
          SelfSignPageLocators.enater_new_username().debug().clear().type(user.username);
          SelfSignPageLocators.create_user().debug().click();
        });
    }

  });

  it('3. Enter a new user Profile Details and Register', function () {
    // validate form title in self-signin page
    if (SelfSignPageLocators.newuser_form_title()) {

      cy.get('@user')
        .then(user => {
          SelfSignPageLocators.enater_new_username().debug().clear().type(user.password , {log:false} );
        });
     // SelfSignPageLocators.create_user().debug().click();
    }

  });
})

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test

  //   expect(err.message).to.include('Ignoring error for now');
  console.log('Cypress detected uncaught exception', err);
  debugger
  return false;
});