describe('APIs do e-commerce (mock local)', () => {
  it('healthcheck', () => {
    cy.request('/api/health.json').its('status').should('eq', 200);
  });

  it('lista pedidos', () => {
    cy.request('/api/orders.json').then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.be.an('array').and.to.have.length.greaterThan(0);
      expect(res.body[0]).to.have.all.keys('id','status','total');
    });
  });

  it('autenticação lê usuários', () => {
    cy.request('/api/users.json').then((res) => {
      expect(res.status).to.eq(200);
      const user = res.body.find(u=>u.email==='cliente@estore.com');
      expect(user).to.include({ senha: '123456' });
    });
  });
});
