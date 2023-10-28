class LoginAndPassword {

    loginWalentyna() {

        const emailAddressField = '#username'
        const passwordField = '#password'

        cy.get(emailAddressField).type(this.login1)
        cy.get(passwordField).type(this.password)
    }

    clickSubmitButton() {

        const loginButton = 'input[name="login"]'

        cy.get(loginButton).click()
    }

    clickCheckboxRememberMe() {

        const checkboxRemember = '#rememberme'

        cy.get(checkboxRemember).click()
    }

    clickCheckboxRememberMe() {

        const checkboxRemember = '#rememberme'

        cy.get(checkboxRemember).click()
    }

    clickRemindersPasswordOption() {

        const checkboxRemember = '#rememberme'

        cy.get(checkboxRemember).click()
    }
}

export default LoginAndPassword