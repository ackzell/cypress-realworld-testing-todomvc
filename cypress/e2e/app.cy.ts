/// <reference types="cypress" />

describe("React TodoMVC", () => {
  it("adds a single todo", () => {
    cy.visit("http://localhost:8888")

    //* You can chain the `type()` calls and prevent `get()`ting the same element more than once
    cy.get(".new-todo")
      .type("Buy rootbeer{enter}")
      .type("Keep rootbeer in the fridge{enter}")

    //* assertion
    cy.get(".todo-list li").should("have.length", 2)
  })
})
