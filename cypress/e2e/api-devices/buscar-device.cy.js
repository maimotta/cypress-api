// Postman: GET - Buscar Um Device
describe('GET /objects/:id - Buscar um device', () => {
  it('deve retornar o device 7 com os dados esperados', () => {
    cy.fixture('device-7.json').then((esperado) => {
      cy.request('GET', `/objects/${esperado.id}`).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).not.empty
        expect(response.body.id).to.eq(esperado.id)
        expect(response.body.name).to.eq(esperado.name)
        expect(response.body.data.year).to.eq(esperado.data.year)
        expect(response.body.data.price).to.eq(esperado.data.price)
        expect(response.body.data['CPU model']).to.eq(esperado.data['CPU model'])
        expect(response.body.data['Hard disk size']).to.eq(esperado.data['Hard disk size'])
      })
    })
  })

  it('Buscar dispositivo especifico pelo id', () => {
    cy.request({
      method: 'GET',
      url: '/objects/7',
      failOnStatusCode: false,
    }).as('getDeviceResult')
    cy.get('@getDeviceResult')
    .then((response) => {
      expect(response.status).equal(200)
      expect(response.body).not.empty
      expect(response.body.id).equal('7')
      expect(response.body.name).equal('Apple MacBook Pro 16')
      expect(response.body.data.year).equal(2019)
      expect(response.body.data.price).equal(1849.99)
      expect(response.body.data['CPU model']).equal('Intel Core i9')
      expect(response.body.data['Hard disk size']).equal('1TB')
    })

  })



  it('deve retornar o device pelo id', () => {
    cy.cadastrarDevice().then((cadastro) => {
      const id = cadastro.body.id

      cy.request('GET', `/objects/${id}`).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.id).to.eq(id)
        expect(response.body.name).to.eq(cadastro.body.name)
        expect(response.body.data).to.deep.eq(cadastro.body.data)
      })
    })
  })

  it('deve retornar 404 para id inexistente', () => {
    cy.request({
      method: 'GET',
      url: '/objects/id-que-nao-existe-123',
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404)
    })
  })
})
