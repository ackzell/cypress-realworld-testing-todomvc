/// <reference types="cypress" />

export default {}

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Creates a default list of todos
       * @example cy.createDefaultTodos()
       */
      createDefaultTodos(): Chainable<Element>
    }
  }
}
