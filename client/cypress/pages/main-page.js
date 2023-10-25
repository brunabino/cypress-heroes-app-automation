class MainPage {
    selectorList() {
        const selector = {
            logoCheck: "[alt='Cypress Heroes Logo']",
            loginButton: "header button",
            emailBox: "[data-cy='email']",
            passwordBox: "[data-cy='password']",
            signInButton: ".modal button",
            buyButton: "[data-cy='money']",
            likeButton: "[data-cy='like']",
            heroImage: ".text-center img",
            yesButton: ".bg-red-600",
            noButton: ".justify-end button.border-gray-300",
            logOutButton: "header button.border-gray-300",
            createNewHeroButton: "[href='/heroes/new']",
            nameField: "[data-cy='nameInput']",
            priceField: "[data-cy='priceInput']",
            fansField: "[data-cy='fansInput']",
            savesField: "[data-cy='savesInput']",
            powerComboList: "select",
            avatarImage: "[data-cy='avatarFile']",
            submitButton: "form button",
            editButton: "[data-cy='pencil']",
            trashButton: "[data-cy='trash']",
            yesButton: ".bg-red-600.text-white",
            noButton: ".justify-end .border-gray-300",
            avatarImageEditMode: ".h-24",
            deleteHeroButton: "[type='button']",
        }

        return selector;
    }

    accessLoginPage() {
        cy.visit('/')
    }

    accessWithAnyUser(username, password) {
        cy.get(this.selectorList().logoCheck).should('be.visible')
        cy.get(this.selectorList().loginButton).click()
        cy.get(this.selectorList().emailBox).type(username)
        cy.get(this.selectorList().passwordBox).type(password)
        cy.get(this.selectorList().signInButton).click()
    }

    mainPageHeroes() {
        cy.get(this.selectorList().buyButton).eq(0).should('be.visible')
        cy.get(this.selectorList().likeButton).eq(0).click()
        cy.get(this.selectorList().buyButton).eq(0).click()
        cy.get(this.selectorList().heroImage).should('be.visible')
        cy.get(this.selectorList().yesButton).click()
        cy.get(this.selectorList().buyButton).eq(2).click()
        cy.get(this.selectorList().heroImage).should('be.visible')
        cy.get(this.selectorList().noButton).click()
        cy.get(this.selectorList().logOutButton).click()
        cy.get(this.selectorList().loginButton).should('be.visible')
    }

    accessWithAdminUser(nameField, priceField, savesField, fansField, imageSelection) {
        cy.get(this.selectorList().createNewHeroButton).should('be.visible')
        cy.get(this.selectorList().likeButton).eq(0).click()
        cy.get(this.selectorList().buyButton).eq(0).click()
        cy.get(this.selectorList().heroImage).should('be.visible')
        cy.get(this.selectorList().yesButton).click()
        cy.get(this.selectorList().buyButton).eq(2).click()
        cy.get(this.selectorList().heroImage).should('be.visible')
        cy.get(this.selectorList().noButton).click()
        cy.get(this.selectorList().createNewHeroButton).click()
        cy.get(this.selectorList().submitButton).should('be.visible')
        cy.get(this.selectorList().nameField).type(nameField)
        cy.get(this.selectorList().priceField).type(priceField)
        cy.get(this.selectorList().fansField).type(fansField)
        cy.get(this.selectorList().savesField).type(savesField)
        cy.get(this.selectorList().powerComboList).select(Math.floor(Math.random() * (8 - 1 + 1)) + 1)
        cy.get(this.selectorList().avatarImage).click()
        cy.get('input[type=file]').selectFile(imageSelection, { force: true })
        cy.get(this.selectorList().submitButton).click()
        cy.get(this.selectorList().trashButton).eq(8).click()
        cy.get(this.selectorList().yesButton).click()
        cy.get(this.selectorList().editButton).eq(1).click()
        cy.get(this.selectorList().avatarImageEditMode).should('be.visible')
        cy.get(this.selectorList().powerComboList).select(Math.floor(Math.random() * (8 - 1 + 1)) + 1)
        cy.get(this.selectorList().submitButton).click()
        cy.get(this.selectorList().likeButton).should('be.visible')
        cy.get(this.selectorList().editButton).eq(1).click()
        cy.get(this.selectorList().avatarImageEditMode).should('be.visible')
        cy.get(this.selectorList().deleteHeroButton).click()
        cy.get(this.selectorList().noButton).click()
        cy.get(this.selectorList().logOutButton).click()
        cy.get(this.selectorList().loginButton).should('be.visible')
      
    }
}

export default MainPage
