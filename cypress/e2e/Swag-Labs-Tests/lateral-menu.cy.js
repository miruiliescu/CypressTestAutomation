describe('Tests', () =>{
    it('lateral', () => {
        cy.visit('https://www.saucedemo.com');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('#react-burger-menu-btn').click();
        cy.wait(2000);
        cy.get('#react-burger-cross-btn').click();
        cy.get('#react-burger-menu-btn').should('be.visible');
    })
})