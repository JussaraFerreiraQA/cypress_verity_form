import { Form } from './elements'

Cypress.Commands.add('formAccess', () => {
      cy.visit('https://www.verity.com.br/contato')
      cy.get(Form.INPUT.ACCEPT)
            .click()

      cy.get(Form.INPUT.CAMP)
            .contains('Vamos conversar')

      cy.get(Form.INPUT.NAME) //nome 
            .type('Teste')

      cy.get(Form.INPUT.EMAIL)//pode confirmar o nome do campo 'Email'
            .type('fake@email.com')

      cy.get(Form.INPUT.TELEPHONE)//telefone
            .type('1199999999')

      cy.get(Form.INPUT.MESSAGE)//conte-nos o desafio
            .type('Quero ser Veriter')

      cy.get(Form.INPUT.CHECK)
            .not('[disabled]')
            .check()
            .should('be.checked')//aceito receber mensagens ticar
      // .click()

      cy.get(Form.BUTTON.SUBMIT)
            .contains('Enviar')
            .click()//clicar no botão enviar
})