// Postman: PUT - Alterar Device
describe('PUT /objects/:id - Alterar device', () => {
  it('deve alterar todos os dados do device', () => {
    cy.cadastrarDevice().then((cadastro) => {
      const id = cadastro.body.id

      cy.fixture('device-alterado.json').then((alterado) => {
        cy.request('PUT', `/objects/${id}`, alterado).then((response) => {
          expect(response.status).to.eq(200)
          expect(response.body.id).to.eq(id)
          expect(response.body).to.have.property('updatedAt')
          expect(response.body.name).to.eq(alterado.name)
          expect(response.body.data).to.deep.eq(alterado.data)
        })
      })
    })
  })
})
