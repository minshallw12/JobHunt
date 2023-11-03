describe("This is our first test", ()=> {
    it('navigate to index', ()=> {
        cy.visit('/');
        cy.get('h1').should('contain', 'Job Tracker');
    });
});