describe('Tests', () => {
    it('details', () =>{
        cy.visit('https://www.saucedemo.com');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('#item_4_title_link > .inventory_item_name').click();
        cy.get('[data-test="back-to-products"]').should('be.visible');
    })

})