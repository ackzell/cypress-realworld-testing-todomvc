/// <reference types="cypress" />

Cypress.Commands.add("createDefaultTodos", () => {
  const TODO_ITEM_ONE = "Buy Milk"
  const TODO_ITEM_TWO = "Pay Rent"
  const TODO_ITEM_THREE = "Pickup Dry Cleaning"

  let cmd = Cypress.log({
    name: "createDefaultTodos",
    // create a custom message for the browser's console
    //* click on the printed name under the "TEST BODY" section
    consoleProps() {
      return {
        "Inserted Todos": [TODO_ITEM_ONE, TODO_ITEM_TWO, TODO_ITEM_THREE],
      }
    },
  })

  //* turning off the "panel (yet to learn the name for it)" log
  // leaving one on true to highlight the diference
  cy.get(".new-todo", { log: false })
    .type(`${TODO_ITEM_ONE}{enter}`, { log: false })
    .type(`${TODO_ITEM_TWO}{enter}`, { log: true })
    .type(`${TODO_ITEM_THREE}{enter}`, { log: false })

  cy.get(".todo-list li", { log: false }).then((listItems) => {
    cmd.set({ el: listItems }).snapshot().end()
  })
})
