class Registration {

    registerNewUser(){

        const emailAddressField = '#reg_email'
        const passwordField = '#reg_password'

        cy.get(emailAddressField).type('WalentynaMaciejewska@dayrep.com')
        cy.get(passwordField).type('Ai2aiCoigh')
    }

    clickRegisterButton(){

        const registerButton = 'input[name="register"]'

        cy.get(registerButton).click()
    }

}

export default Registration