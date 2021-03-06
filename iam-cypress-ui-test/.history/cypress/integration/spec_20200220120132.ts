



// describe('CRA', () => {
//     it('shows learn link', function () {
//         cy.visit(' https://is510B.qa.com:443/t/wso2.com/user-portal/')
//         // cy.get('.App-link').should('be.visible')
//         //     .and('have.text', 'Learn React')
//         cy.title().should('eq', 'WSO2 Identity Server')
//     })
// })
// context('Page Availability', () => {
//     beforeEach(() => {
//       cy.on('uncaught:exception', (err) => {
//         expect(err.message).to.include('Ignoring error for now');
//         return false;
//       });
//     });
//   });
describe('Testing WSO2 Identity Server Login Page', () => {
it('Perform Login',() =>{
//Visit WSO2 User-Portal Login Page
cy.visit(' https://is510B.qa.com:443/t/wso2.com/user-portal/')
cy.title().should('eq', 'WSO2 Identity Server')
cy.contains('Continue').click();
cy.contains('Continue').click();


cy.pause()

//Enter uUsername & password
cy.get('#username').should('have.attr', 'placeholder', 'Username').type('admin');
cy.should('have.value', 'admin')
//cy.get('#username').clear()

cy.get('#password').type('admin');
cy.should('have.value', 'admin')
cy.contains('Continue').debug().click();
//cy.get('.product-title-text').should('eq','User Portal')
//cy.get('h1').invoke('text').should('eq', 'User Portal');
// cy.get('h1').find('.product-title-text').invoke('text').then(($text => {
    
//     expect(text.trim()).
// }));


    cy.get('[class="product-title-text"]')
    
    .should(($div) => {
        expect($div.text().trim()).equal('User Portal');
      });
    
    
   
    



  })
})


    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
       
         //   expect(err.message).to.include('Ignoring error for now');
        console.log('***********Cypress detected uncaught exception', err);
        debugger
        return false;
      });