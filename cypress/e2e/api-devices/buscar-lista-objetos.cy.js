// Postman: GET - Buscar Lista de Objetos
describe('GET /objects?id= - Buscar lista de objetos por id', () => {
  it('deve retornar apenas os objetos dos ids informados', () => {
    const ids = ['3', '5', '10']

    cy.request('GET', `/objects?${ids.map((id) => `id=${id}`).join('&')}`).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.length(ids.length)
      expect(response.body.map((o) => o.id)).to.have.members(ids)
    })
  })
})
