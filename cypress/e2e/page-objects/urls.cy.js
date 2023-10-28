class Urls {

    visitToMainPage(){
        const url = '/'
        cy.visit(url)
    }
    
    visitToAccountPage(){
        const url = '/my-account'
        cy.visit(url)
    }

    visitToContactPage(){
        const url = '/test-contact-blablabla'
        cy.visit(url)
    }

    visitToContactPage(){
        const url = '/test-contact-blablabla'
        cy.visit(url)
    }
}

export default Urls