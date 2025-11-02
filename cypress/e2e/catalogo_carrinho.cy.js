describe('Catálogo e carrinho', () => {
  beforeEach(() => {
    // Abre a home (usa a baseUrl do cypress.config.js)
    cy.visit('/index.html');
    // Limpa o carrinho a cada teste
    cy.window().then((w) => w.localStorage.removeItem('cart'));
  });

  it('filtra produtos pela busca', () => {
    cy.get('#busca').clear().type('mouse');
    cy.contains('Mouse Gamer').should('be.visible');
    cy.contains('Notebook Pro 14').should('not.exist');
  });

  it('adiciona e remove itens do carrinho', () => {
    // === ADICIONAR ITENS NO CATÁLOGO ===
    // Cada "card" tem um botão "Adicionar" no seu HTML (do seu index.html)
    cy.contains('.card', 'Notebook Pro 14')
      .find('button')
      .contains('Adicionar')
      .click();

    cy.contains('.card', 'Teclado Mecânico')
      .find('button')
      .contains('Adicionar')
      .click()
      .click(); // 2x

    // Valida presença no carrinho
    cy.get('#itens')
      .should('contain', 'Notebook Pro 14')
      .and('contain', 'Teclado Mecânico');

    // Total precisa ser > 0 (independe se usa vírgula ou ponto)
    cy.get('#total')
      .invoke('text')
      .then((txt) => {
        const valor = parseFloat(txt.replace(',', '.'));
        expect(valor).to.be.greaterThan(0);
      });

    // === REMOVER 1x o TECLADO NO CARRINHO ===
    // Aqui não dependemos de texto do botão ("Remover" ou "-").
    // Pegamos a DIV do carrinho que contém "Teclado Mecânico" e clicamos o único botão dentro dela.
    cy.get('#itens')
      .contains('div', 'Teclado Mecânico') // pega a linha certa
      .within(() => {
        cy.get('button').should('be.visible').click(); // clica no "-"
      });

    // Depois de remover uma unidade, espera ver x1
    cy.get('#itens').contains('Teclado Mecânico').should('contain', 'x1');
  });

  it('limpa carrinho', () => {
    // Adiciona algo só para limpar depois
    cy.contains('.card', 'Mouse Gamer')
      .find('button')
      .contains('Adicionar')
      .click();

    // Clica no botão "Limpar" do carrinho
    cy.get('#btn-limpar').click();

    // Carrinho vazio
    cy.get('#itens').should('be.empty');

    // Total zerado (aceita 0,00 ou 0.00, para evitar flakiness)
    cy.get('#total')
      .invoke('text')
      .then((txt) => txt.trim())
      .then((txt) => txt.replace('.', ','))
      .should('eq', '0,00');
  });
});
