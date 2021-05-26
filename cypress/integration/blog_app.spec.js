describe("Blog app", function () {
  beforeEach(function () {
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

  /**
   * Implementation of Blog creation
   */
  //   describe("when logged in", function () {
  //     beforeEach(function () {
  //       cy.login({ username: "sauravgupta2800", password: "password" });
  //     });

  //     it("A blog can be createdd", function () {
  //       cy.createBlog({
  //         title: "A blog title",
  //         author: "Apna bhai Saurav",
  //         url: "www.google.com",
  //       });
  //     });
  //   });

  /**
   * Implementation of Blog Like
   */
  //   describe("when logged in", function () {
  //     beforeEach(function () {
  //       cy.login({ username: "sauravgupta2800", password: "password" });
  //       cy.createBlog({
  //         title: "A blog title",
  //         author: "Apna bhai Saurav",
  //         url: "www.google.com",
  //       });
  //     });

  //     it("A blog can be liked", function () {
  //       cy.contains("Show Details").click();
  //       cy.contains("likes").click();
  //     });
  //   });

  /**
   * Implementation of Blog Delete(check if it present then only delete)
   */
  describe("when logged in", function () {
    beforeEach(function () {
      cy.login({ username: "sauravgupta2800", password: "password" });
      cy.createBlog({
        title: "A blog title",
        author: "Apna bhai Saurav",
        url: "www.google.com",
      });
    });

    it("A blog can be deleted", function () {
      cy.contains("Show Details").click();
      cy.contains("Delete").then((el) => {
        el.click();
      });
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

Cypress.Commands.add("createBlog", ({ title, author, url }) => {
  cy.contains("New Note").click();
  cy.get("#title").type(title);
  cy.get("#author").type(author);
  cy.get("#url").type(url);
  cy.contains("Create").click();
});
