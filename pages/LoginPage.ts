const { I } = inject()

class LoginPage {
	private loadPage: string
	private loginInputName: string
	private loginInputPassword: string
	private loginButton: string
	private loginVerification: string
	private loginTenant:string

	constructor() {
		this.loadPage = 'span.text-3xl.font-bold'
		this.loginInputName = 'input#email'
		this.loginInputPassword = 'input#password'
		this.loginTenant = '//input[@placeholder="Tenant"]'
		this.loginButton = 'button[type="button"]'
		this.loginVerification = '//div[text()="Bienvenido Admin Super99"]'
	}

	//Ya no necesitamos el async
	visit() {
		//page.goto('https://prod-v3-oms.omni.pro/SUPER99/login')
		I.amOnPage('/login')
    
		//page.waitForSelector(this.loadPage)
		I.waitForElement(this.loadPage,4)
		
		try {
			I.seeInCurrentUrl('/login')
		} catch (error) {
			throw Error('Error en la url de la pagina', error)
		}
	}

	async login(email, password, tenant) {
		I.waitForElement(this.loginInputName, 5);
		I.fillField(this.loginInputName, email);
	  
		I.waitForElement(this.loginInputPassword, 5);
		I.fillField(this.loginInputPassword, password);
	
		
		I.fillField(this.loginTenant,tenant)
		I.click(this.loginButton)
		I.wait(5)

	}

	validateLogin() {
		//await page.waitForSelector(this.loginVerification)
		I.waitForElement(this.loginVerification,3)
	}
}

export default LoginPage
