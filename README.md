# Projeto Verity Form de Testes com Cypress 
[![Cypress](https://img.shields.io/npm/v/cypress?color=33ff99&label=cypress&logo=cypress&style=for-the-badge)](https://www.cypress.io)

Este é um projeto form de testes automatizados utilizando o framework de testes Cypress no Visual Studio Code (VSCode).

## Requisitos

Antes de iniciar o projeto, você precisará ter o seguinte software instalado em seu sistema:

- Node.js (versão 14 ou superior)

- Visual Studio Code

## Configuração do Projeto

Siga as etapas abaixo para configurar o projeto:

- Crie uma nova pasta no seu computador para o projeto.

 - Abra o Visual Studio Code.

 - Abra a pasta do projeto no VSCode:

 - No menu superior, selecione File > Open Folder.

 - Selecione a pasta que você criou para o projeto.

No VSCode, abra o terminal integrado:

- No menu superior, selecione Terminal > New Terminal, ou ctrl+'

- No terminal, execute o comando abaixo para inicializar um novo projeto Node.js:

```bash
npm install -y
```

- Para conferir a instalação do seu node use:

```bash
node -v
```

- Instale o Cypress como dependência de desenvolvimento:

```bash
npm install cypress --save-dev
```

## Executando os Testes

- Para executar os testes no Cypress, siga as etapas abaixo:

- No terminal do VSCode, execute o seguinte comando para abrir o Cypress:
```bash
npx cypress open
```

- O Cypress será aberto em uma nova janela. Selecione um arquivo de teste para executar os testes automatizados.

## Estrutura do Projeto

- A estrutura do projeto é organizada da seguinte forma:

├── cypress/

│   ├── dowloads

│   ├── e2e                                 Testes de integração

│   ├── fixtures                            Armazenar arquivos de dados de teste

│   ├── support                             Utilitários e configurações adicionais

│   ├── videos                              Gravações de vídeo dos testes

│   ├── screenshots                         Capturas de tela dos testes

│   ├── node_modules                        Package node.js

│   ├── cypress.config.js                   Configurações do Cypress

│   ├── package-lock.json                   Arquivos node

│   ├── package.json                        Arquivos node

│   └── README.md                           Documentação do projeto

└── ...

- A pasta cypress contém todos os arquivos relacionados aos testes automatizados. A pasta fixtures é usada para armazenar arquivos de dados de teste, a pasta integration contém os testes de integração, e a pasta support contém utilitários e configurações extras.

## Scripts de execução

- Linha de comando (headless)

```bash
npx cypress run
```

- Linha de comando (interface)
```bash
npx cypress open
```
<br>

## Scripts de Configuração Opcional
```bash
    defaultCommandTimeout: 15000, //tempo dos comandos 
    responseTimeout: 15000, //resposta da requisição api (dinâmico)
    requestTimeout: 15000, //pedido da requisição (dinâmico)
    pageLoadTimeout: 15000, //tempo de carregamento da página (estático)
```
## Recursos Adicionais

### Documentação oficial do Cypress

https://docs.cypress.io/guides/overview/why-cypress

https://docs.cypress.io/guides/getting-started/installing-cypress
<br>

- Exemplos de testes com Cypress

https://docs.cypress.io/examples/recipes

https://github.com/cypress-io/cypress-example-recipes
<br>

### Linha de comando

https://docs.cypress.io/guides/guides/command-line#Commands

### Configuração de Timeouts opcional

https://docs.cypress.io/guides/references/configuration


## Licença
