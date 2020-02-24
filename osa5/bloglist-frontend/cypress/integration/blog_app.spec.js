describe('Blog app', function () {
    beforeEach(function () {
        cy.request('POST', 'http://localhost:3001/api/testing/reset')
        const user = {
            name: 'Matti Luukkainen',
            username: 'mluukkai',
            password: 'salainen'
        }
        cy.request('POST', 'http://localhost:3001/api/users/', user)
        cy.visit('http://localhost:3000')
    })

    it('Login form is shown', function () {
        cy.contains('blogs')
        cy.contains('Log in to application')
        cy.contains('username')
        cy.contains('password')
    })
})

describe('Login', function () {
    it('login form can be opened', function () {
        cy.visit('http://localhost:3000')
        cy.contains('login').click()
    })

    it('succeeds with correct credentials', function () {
        cy.contains('login').click()
        cy.get('#username').type('mluukkai')
        cy.get('#password').type('salainen')
        cy.get('#login-button').click()
        cy.contains('Matti Luukkainen logged in')
        cy.get('#logout-button').click()
    })

    it('fails with wrong credentials', function () {
        cy.get('#username').type('mluukkai')
        cy.get('#password').type('thisiscompletelywrong')
        cy.get('#login-button').click()

        cy.contains('wrong username or password')
    })

    describe('Blog app', function () {


        describe.only('When logged in', function () {
            beforeEach(function () {
                cy.request('POST', 'http://localhost:3001/api/testing/reset')
                const user = {
                    name: 'Matti Luukkainen',
                    username: 'mluukkai',
                    password: 'salainen'
                }
                cy.request('POST', 'http://localhost:3001/api/users/', user)
                cy.visit('http://localhost:3000')

                cy.contains('login').click()
                cy.get('#username').type('mluukkai')
                cy.get('#password').type('salainen')
                cy.get('#login-button').click()
                cy.contains('Matti Luukkainen logged in')
            })

            it('A blog can be created', function () {
                cy.get('#createblog-button').click()
                cy.get('#title').type('test')
                cy.get('#author').type('tester')
                cy.get('#url').type('test.test')
                cy.get('#create-button').click()
            })
        })
    })
})