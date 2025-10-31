describe('Catálogo e carrinho', () => {
  beforeEach(() => {
    cy.visit('/index.html');
    // limpa carrinho entre testes
    cy.window().then(w => w.localStorage.removeItem('cart'));
  });

  it('filtra produtos pela busca', () => {
    cy.get('#busca').type('mouse');
    cy.contains('Mouse Gamer').should('be.visible');
    cy.contains('Notebook Pro 14').should('not.exist');
  });

  it('adiciona e remove itens do carrinho', () => {
    cy.contains('Notebook Pro 14').parent().find('button').click();
    cy.contains('Teclado Mecânico').parent().find('button').click().click(); // 2x
    cy.get('#itens').should('contain', 'Notebook Pro 14').and('contain', 'Teclado Mecânico');
    cy.get('#total').invoke('text').then(txt => {
      // só valida que calculou algo > 0
      expect(parseFloat(txt.replace(',', '.'))).to.be.greaterThan(0);
    });
    // remover um
    cy.get('#itens').contains('Teclado Mecânico').parent().find('button').click();
    cy.get('#itens').contains('Teclado Mecânico').should('contain', 'x1');
  });

  it('limpa carrinho', () => {
    cy.contains('Mouse Gamer').parent().find('button').click();
    cy.get('#btn-limpar').click();
    cy.get('#itens').should('be.empty');
    cy.get('#total').should('have.text', '0,00');
  });
});
