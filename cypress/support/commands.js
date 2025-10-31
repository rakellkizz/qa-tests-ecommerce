Cypress.Commands.add('login', (email='cliente@estore.com', senha='123456') => {
  cy.visit('/login.html');
  cy.get('#email').type(email);
  cy.get('#senha').type(senha);
  cy.get('#entrar').click();
  cy.contains('Login efetuado', { timeout: 4000 }).should('be.visible');
});
