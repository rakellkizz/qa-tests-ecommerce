describe('Login', () => {
  it('falha com credenciais inválidas', () => {
    cy.visit('/login.html');
    cy.get('#email').type('x@y.com');
    cy.get('#senha').type('errada');
    cy.get('#entrar').click();
    cy.contains('Credenciais inválidas.').should('be.visible');
  });

  it('sucesso com credenciais válidas', () => {
    cy.login(); // custom command
    cy.url().should('include', '/index.html');
  });
});
