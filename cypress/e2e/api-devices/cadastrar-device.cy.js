// Postman: POST - Cadastra Objeto
describe('POST /objects - Cadastrar device', () => {
  it('deve cadastrar um device novo', () => {
    cy.fixture('device.json').then((device) => {
      cy.request('POST', '/objects', device).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('id').and.not.be.empty
        expect(response.body).to.have.property('createdAt')
        expect(response.body.name).to.eq(device.name)
        expect(response.body.data).to.deep.eq(device.data)
      })
    })
  })
})
