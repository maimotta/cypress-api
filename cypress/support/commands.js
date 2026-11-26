// Comandos customizados usados nos testes da API de devices

// Cadastra um device novo e devolve a resposta (usado como pré-condição nos testes)
Cypress.Commands.add('cadastrarDevice', (fixture = 'device.json') => {
  return cy.fixture(fixture).then((body) => {
    return cy.request('POST', '/objects', body)
  })
})
