describe("Smoke test", () => {
  it("Opens the login page", () => {
    cy.visit("localhost:8000/login");
    cy.get(".login-form-top-title").contains("Bulldoggy");
  });
});
