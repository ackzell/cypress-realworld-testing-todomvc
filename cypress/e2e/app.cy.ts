/// <reference types="cypress" />

describe("React TodoMVC", () => {
  const TODO_ITEM_ONE = "Buy Milk"
  const TODO_ITEM_TWO = "Pay Rent"
  const TODO_ITEM_THREE = "Pickup Dry Cleaning"

  beforeEach(() => {
    cy.visit("http://localhost:8888")
  })

  it("should add a single todo", () => {
    //* You can chain the `type()` calls and prevent `get()`ting the same element more than once
    cy.get(".new-todo").type(`${TODO_ITEM_ONE}{enter}`)

    //* assertion
    cy.get(".todo-list li")
      //grab the first item in the resulting array
      .eq(0)
      // find a DOM element within that node
      .find("label")
      // assert
      .should("contain", TODO_ITEM_ONE)
  })

  it("should add three todos", () => {
    cy.createDefaultTodos().as("todos")
    cy.get("@todos").should("have.length", 3)
  })

  it("should append new items to the bottom of the list", () => {
    cy.createDefaultTodos().as("todos")

    // Todo 1
    cy.get("@todos").eq(0).find("label").should("contain", TODO_ITEM_ONE)

    // Todo 2
    cy.get("@todos").eq(1).find("label").should("contain", TODO_ITEM_TWO)

    // Todo 3
    cy.get("@todos").eq(2).find("label").should("contain", TODO_ITEM_THREE)

    //* a "more realistic" approach to asserting we have the expected result
    // this is the bottom left label that shows up in the app itself

    //* From learn.cypress.io:
    /**
     * You will notice that our .todo-count is a <span> with multiple elements nested
     * inside of it. The number is wrapped in a <strong> tag,
     * and the words are wrapped in <span> tags.
     *
     * The cy.contains() method will find the appropriate text
     * even though it may be nested in several different tags.
     */
    cy.get(".todo-count").contains("3 items left")
  })

  //* it.only() focuses on just this one test
  it.only("does NOT display the footer or todo-list when there are no todos", () => {
    cy.get(".footer").should("not.exist")
    cy.get(".todo-list").should("not.exist")
  })
})
