describe('CyPress Poc', () => {
  it('Visit vue project !', () => {
    cy.visit('http://localhost:8080');
    cy.contains('About').click();
    cy.url().should('include', 'about');
    cy.get('input[data-form-email]')
      .type('fake@email.com')
      .should('have.value', 'fake@emeeail.com')
  });
});
