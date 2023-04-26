describe("Given a /login page", () => {
  describe("When it recieves a username:'admin' and password 'admin', and the user submits the form", () => {
    it("Then the user will login correctly", () => {
      cy.visit("/");

      cy.findByLabelText("Usuario*").type("admin");
      cy.findByLabelText("Contraseña*").type("admin");
      cy.get("button").click();

      cy.visit("/home");
    });
  });
});
