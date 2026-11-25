// Postman: GET - Listar Devices
describe('GET /objects - Listar devices', () => {
  it('deve retornar a lista de devices', () => {
    cy.request('GET', '/objects').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.be.an('array').and.not.be.empty
      response.body.forEach((device) => {
        expect(device).to.have.property('id')
        expect(device).to.have.property('name')
      })
    })
  })
})
