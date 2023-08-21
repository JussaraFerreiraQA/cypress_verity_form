import { Form } from './elements'

Cypress.Commands.add('formAccess', () => {
      cy.visit('https://www.verity.com.br/contato')
      cy.get(Form.INPUT.ACCEPT)
            .click()

      cy.get(Form.INPUT.CAMP)
            .contains('Vamos conversar')

      cy.get(Form.INPUT.NAME)
            .type('Teste')

      cy.get(Form.INPUT.EMAIL)
            .type('fake@email.com')

      cy.get(Form.INPUT.TELEPHONE)
            .type('1199999999')

      cy.get(Form.INPUT.MESSAGE)
            .type('Quero ser Veriter')

      cy.get(Form.INPUT.CHECK)
            .not('[disabled]')
            .check()
            .should('be.checked')

      cy.get(Form.BUTTON.SUBMIT)
            .contains('Enviar')
            .click()
})
