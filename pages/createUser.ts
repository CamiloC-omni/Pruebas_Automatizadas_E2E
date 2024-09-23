const { I } = inject()


class CreateUser {
	private pageLanding: string
	private buttonConfiguration: string
	private clickUser: string
	private buttonCreateUser: string
	private userNewForm: string
	private inputForm: InputForm
    private buttonSave: string 
    private elementValidation : string
    private elementValidation2 : string


	constructor() {
		this.pageLanding = '//a[text()="Torre de control"]'
		this.buttonConfiguration = '//*[@id="__nuxt"]/div/main/div[1]/div[2]/ul[2]/li[4]/a'
		this.clickUser = '//a[@href="/users"]'
		this.buttonCreateUser = '//a[@type="button"]'
		this.userNewForm = '//form[@class="dynamic-form grid md:grid-cols-2 md:gap-4"]'
		this.inputForm = {
            userNames: '//label[text()="Nombres"]',
            userLoginName: '//label[text()="Nombre de usuario"]',
            userEmail: '//label[text()="Correo electrónico"]',
            userEmailConfirm: '//label[text()="Confirmación de correo electrónico"]',
            userPassword: '//label[text()="Contraseña"]',
            userConfirmPassword: 'Confirmación de contraseña',
            userCountry: '//div[@label="País"]/button/div[2]/input',
            firstOptionCountry: 'div[label="País"] > button > ul > li:nth-child(1)',
            language: '//div[@label="Idioma"]/button/div[2]/input',
            firstOptionLanguage: 'div[label="Idioma"]> button > ul > li:nth-child(1)',
            timezone: '//div[@label="Zona horaria"]/button/div[2]/input',
            firstOptionZone: 'div[label="Zona horaria"]> button > ul > li:nth-child(1)',
            super: '//form/div[10]/div/label/input',
        }
        this.buttonSave = '//div[@class="edit-tools-content"]/div/div[2]/button[2]'
        this.elementValidation = '//a[text()="Editar usuario"]'
        this.elementValidation2 = '//a/span[text()="Configuración"]'
	}

	verificarUbicacion() {
		
		I.seeInCurrentUrl('/landing')
    
		I.waitForElement(this.pageLanding,3)
	}

	async GoToFormCreateUser() {
        I.click(this.buttonConfiguration)
		I.click(this.clickUser)

        I.seeInCurrentUrl('/users')
        I.wait(5)

        I.waitForElement(this.buttonCreateUser,2)
        I.click(this.buttonCreateUser)

        I.waitInUrl('/users/create?tab=userNew',5)
        
        I.waitForElement(this.userNewForm)
 
	}

	async formNewUserFill(userNames, userLoginName, userEmail,userEmailConfirm,userPassword,userPasswordConfirm, userCountry,language,timezone) {
        
        
        I.fillField(this.inputForm.userNames, userNames)
        I.fillField(this.inputForm.userLoginName, userLoginName)
        I.fillField(this.inputForm.userEmail, userEmail)
        I.fillField(this.inputForm.userEmailConfirm, userEmailConfirm)
        I.fillField(this.inputForm.userPassword, userPassword)
        I.fillField(this.inputForm.userConfirmPassword, userPasswordConfirm)
        I.fillField(this.inputForm.userCountry, userCountry)
        I.click(this.inputForm.firstOptionCountry)
        I.click(this.inputForm.language)
        I.fillField(this.inputForm.language, language)
        I.click(this.inputForm.firstOptionLanguage)
        I.click(this.inputForm.timezone)
        I.fillField(this.inputForm.timezone, timezone)
        I.click(this.inputForm.firstOptionZone)
        I.wait(5)
        I.forceClick(this.inputForm.super)
        I.click(this.buttonSave)
        I.wait(5)
	}


    validateUser() {
        I.seeElement(this.elementValidation)
        I.waitForElement(this.elementValidation2)
    }

}

export default CreateUser
