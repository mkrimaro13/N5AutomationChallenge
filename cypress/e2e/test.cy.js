describe('Automation Challenge', () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false;
      });
    it('Navegar a la Home Page de Netflix', () => {
        cy.visit("/")
    })
    it('Realizar el inicio de sesión', () => {
        cy.contains('Sign In').click()
        cy.contains('Email').type("eldelpedo@gmail.com")
        cy.contains('Password').type("a11b12c13d19")
        cy.get('.btn').click()
    })
    it('Seleccionar el perfil para la búsqueda', () => {
        cy.get(':nth-child(1) > :nth-child(1) > .profile-link > .avatar-wrapper > .profile-icon').click()
    })
})
