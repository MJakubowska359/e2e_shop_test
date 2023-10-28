import Urls from "./page-objects/urls.cy";

describe('Registration in Shop', () => {

    beforeEach(function (){
        cy.fixture('login').as('users')
    })

    beforeEach(() => {
        cy.clearAllSessionStorage()
        cy.clearAllCookies()
    })

it('Should be able to enter to the main page and my account page', () => {
    
    const visitMainPage = new Urls

    visitMainPage.visitToMainPage()
    visitMainPage.visitToAccountPage()
    

});

})