// blog_app.spec.js created with Cypress

//

// Start writing your Cypress tests below!

// If you're unfamiliar with how Cypress works,

// check out the link below and learn how to write your first test:

// https://on.cypress.io/writing-first-test

describe("Blog app", function () {
  beforeEach(function () {
    /**
     * Need to find a way to make async
     */
    cy.request("POST", "http://localhost:3003/api/testing/reset").then(() => {
      const user = {
        name: "Saurav",
        username: "sauravgupta2800",
        password: "password",
      };
      cy.request("POST", "http://localhost:3003/api/users", user).then(() => {
        cy.visit("http://localhost:3000");
      });
    });
  });

//   it("User can log in", function () {
//     cy.get("#username").type("sauravgupta2800");
//     cy.get("#password").type("password");
//     cy.get("#login-button").click();
//     cy.contains("Saurav logged in");
//   });

  describe("when logged in", function () {
    beforeEach(function () {
      //   cy.get("#username").type("sauravgupta2800");
      //   cy.get("#password").type("password");
      //   cy.get("#login-button").click();
      //   cy.contains("Saurav logged in");
      cy.login({ username: "sauravgupta2800", password: "password" });
    });

    it("A blog can be createdd", function () {
      cy.contains("New Note").click();
    });
  });
});

Cypress.Commands.add("login", ({ username, password }) => {
  cy.request("POST", "http://localhost:3003/api/login", {
    username,
    password,
  }).then(({ body }) => {
    localStorage.setItem("loggedBlogappUser", JSON.stringify(body));
    cy.visit("http://localhost:3000");
  });
});
