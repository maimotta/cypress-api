// Postman: DELETE - Deleta um device
describe('DELETE /objects/:id - Deletar device', () => {
  it('deve deletar o device e ele não deve mais ser encontrado', () => {
    cy.cadastrarDevice().then((cadastro) => {
      const id = cadastro.body.id

      cy.request('DELETE', `/objects/${id}`).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.message).to.contain(id)
      })

      cy.request({ method: 'GET', url: `/objects/${id}`, failOnStatusCode: false })
        .its('status')
        .should('eq', 404)
    })
  })
})
