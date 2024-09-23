const { I } = inject()
import LoginPage from '../pages/LoginPage'

const loginPage = new LoginPage()

Given('Im on the right page', () => {
	loginPage.visit()
})


When(/^I fill the form with my (.*) and my (.*) and (.*) optional$/, (email, password, tenant) => {
	loginPage.login(email, password, tenant)
})

Then('I should see the dashboard page', () => {
	loginPage.validateLogin()
})
