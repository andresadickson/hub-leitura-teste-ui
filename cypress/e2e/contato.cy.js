describe('Funcionalidade: Contato', () => {
  it.only('Deve preencher o formulário de contato com sucesso', () => {
  cy.visit('http://localhost:3000/index.html')
  cy.get('[name="name"]').type('Andresa Dickson')
  cy.get('[name="email"]').type('andresaschirmer@gmail.com')
  cy.get('[name="subject"]').select('Sugestões')
  cy.get('[name="message"]').type('Mensagem de teste')
  cy.get('#btn-submit').click()
  cy.contains('Contato enviado com sucesso!').should('exist')
  })
  it('Teste 2', () => {

  });

  it('Teste 3', () => {

  });

  it('Teste 4', () => {

  });

}) 