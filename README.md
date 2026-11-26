# Testes de API com Cypress

[![Testes de API](https://github.com/maimotta/cypress-api/actions/workflows/api-tests.yml/badge.svg)](https://github.com/maimotta/cypress-api/actions/workflows/api-tests.yml)

Projeto de automação de testes de API REST usando [Cypress](https://www.cypress.io/), validando o CRUD completo de *devices* da API pública [restful-api.dev](https://restful-api.dev/).

Os cenários foram mapeados primeiro no Postman e depois automatizados com Cypress.

## Tecnologias

- [Cypress](https://www.cypress.io/) 16 (`cy.request` para chamadas HTTP)
- JavaScript / Node.js
- GitHub Actions (execução automática a cada push e pull request)

## Cenários cobertos

| Método | Endpoint | Cenário |
|--------|----------|---------|
| `GET` | `/objects` | Lista todos os devices |
| `GET` | `/objects?id=` | Busca uma lista de devices por vários ids |
| `GET` | `/objects/:id` | Busca um device específico e valida seus dados |
| `GET` | `/objects/:id` | Retorna **404** para id inexistente |
| `POST` | `/objects` | Cadastra um device novo |
| `PUT` | `/objects/:id` | Altera todos os dados de um device |
| `DELETE` | `/objects/:id` | Deleta um device e confirma que ele não é mais encontrado |

## Estrutura do projeto

```
cypress/
├── e2e/api-devices/   # Specs de teste, um arquivo por operação
├── fixtures/          # Massa de dados (corpos de requisição e respostas esperadas)
└── support/
    └── commands.js    # Comando customizado cy.cadastrarDevice()
cypress.config.js      # baseUrl da API
```

### Boas práticas aplicadas

- **Massa de dados em fixtures**, separada da lógica dos testes.
- **Testes independentes**: cada teste que altera ou deleta cria seu próprio device como pré-condição, via o comando customizado `cy.cadastrarDevice()`.
- **Cenário negativo**: validação do status 404 para recursos inexistentes.
- **Integração contínua**: os testes rodam no GitHub Actions a cada alteração.

## Como executar

Pré-requisito: [Node.js](https://nodejs.org/) 18 ou superior.

```bash
# Instalar as dependências
npm install

# Rodar todos os testes em modo headless
npm test

# Rodar apenas os testes da API de devices
npm run test:api

# Abrir a interface do Cypress
npm run cy:open
```

## Autora

**Maiara Motta**
