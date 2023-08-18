describe('Prueba', () => {
  it('primera prueba', () => {
    cy.visit('https://www.google.cl');
    cy.wait(2000);
    cy.get('.gb_t:contains("Imágenes")').click();
    cy.get('#APjFqb').type('cypress{Enter}');
  });
});
