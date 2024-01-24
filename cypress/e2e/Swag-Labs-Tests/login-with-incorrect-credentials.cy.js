describe('Tests', () => {
    it('incorrect', () =>{
        cy.visit('https://www.saucedemo.com');
        cy.get('#user-name').type('wrong_user');
        cy.get('#password').type('wrong_pass');
        cy.get('#login-button').click();
        cy.get('.error-message-container').should('be.visible');
    })

})

