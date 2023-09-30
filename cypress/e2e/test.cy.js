describe('Automation Challenge', () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false;
      });
    it('Navegar a la Home Page de Netflix', () => {
        cy.clearCookies()
        cy.visit("/")
    })
    it('Realizar el inicio de sesión', () => {
        cy.contains('Sign In').click()
        cy.contains('Email').type("eldelpedo@gmail.com")
        cy.contains('Password').type("a11b12c13d19")
        cy.get('.btn').click()
    })
    it('Seleccionar el perfil de usuario', () => {
        cy.get(':nth-child(1) > :nth-child(1) > .profile-link > .avatar-wrapper > .profile-icon').click()
    })
    it('Obtener y comparar el título de la página', () => {
        cy.title().should('include', 'Netflix')  
    })
    it('Obtener e imprimir el enlace del sitio', () => {
        cy.url().should('include', 'www.netflix.com')
    })
})
