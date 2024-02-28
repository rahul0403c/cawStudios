/// <reference types="cypress" />
import data from "../fixtures/userdata.json";
describe("Dynamic HTML Table tag", () => {
  it("Entering new data in dynamic HTML table", () => {
    cy.visit("https://testpages.herokuapp.com/styled/tag/dynamic-table.html");
    cy.get("summary").click();
    cy.get("#jsondata").clear();
    cy.fixture("userdata").then((data) => {
      cy.get("#jsondata").type("[");
      data.forEach((allData) => {
        cy.get("#jsondata").type('{"name": "');
        cy.get("#jsondata").type(allData.name);
        cy.get("#jsondata").type('", "age": "');
        cy.get("#jsondata").type(allData.age);
        cy.get("#jsondata").type('", "gender": "');
        cy.get("#jsondata").type(allData.gender);
        cy.get("#jsondata").type('"},');
      });
    });
    cy.get("#jsondata").type("{backspace}]");
    cy.get("#refreshtable").click();
    cy.get("#dynamictable > :nth-child(3)  > :nth-child(1)").should(
      "have.text",
      "Bob"
    );
  });
});

