const { I } = inject()

class CreateUser {
	private pageLanding: string
	private buttonConfiguration: string
	private clickUser: string
	private buttonCreateUser: string
	private userNewForm: string
	private inputForm: InputForm
    private buttonSave: {role: string, name: string }
    private elementValidation : string
    private elementValidation2 : string

	constructor() {
		this.pageLanding = '//ul[@class="bottom-menu mt-5 p-1.5"]'
		this.buttonConfiguration = '//*[@id="__nuxt"]/div/main/div[1]/div[2]/ul[2]/li[4]/a'
		this.clickUser = '//a[@href="/users"]'
		this.buttonCreateUser = '//a[@type="button"]'
		this.userNewForm = '//form[@class="dynamic-form grid md:grid-cols-2 md:gap-4"]'
		this.inputForm = {
            userNames: '//label[text()="Nombres"]',
            userLoginName: '//input[@id="1289"]',
            userEmail: '//input[@id="1293"]',
            userEmailConfirm: '//input[@id="1297"]',
            userPassword: '//input[@id="1301"]',
            userConfirmPassword: '//input[@id="1306"]',
            userCountry: '//button[@id="1311"]/div[2]/input',
            firstOptionCountry: '#1311[data-index="0"]',
            language: '//button[@id="1318"]/div[2]/input',
            firstOptionLanguage: '#1311[data-index="0"]',
            timezone: '//button[@id="1347"]/div[2]/input',
            firstOptionZone: '#1347[data-index="0"]',
            super: {role:'checkbox', name:'Super usuario' },
        }
        this.buttonSave = {role:'button', name:'Guardar'}
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

        I.waitForElement(this.buttonCreateUser,2)
        I.click(this.buttonCreateUser)

        I.waitInUrl('/users/create?tab=userNew',5)
        I.wait(5)
        
        I.waitForElement(this.userNewForm)
 
	}

	formNewUserFill(userNames, userLoginName, userEmail,userEmailConfirm,userPassword,userPasswordConfirm, userCountry,language,timezone) {
        I.fillField(this.inputForm.userNames, userNames)
        I.wait(10)
        I.fillField(this.inputForm.userLoginName, userLoginName)
        I.fillField(this.inputForm.userEmail, userEmail)
        I.fillField(this.inputForm.userEmailConfirm, userEmailConfirm)
        I.fillField(this.inputForm.userPassword, userPassword)
        I.fillField(this.inputForm.userConfirmPassword, userPasswordConfirm)
        I.fillField(this.inputForm.userCountry, userCountry)
        I.click(this.inputForm.firstOptionCountry)
        I.fillField(this.inputForm.language, language)
        I.click(this.inputForm.firstOptionLanguage)
        I.fillField(this.inputForm.timezone, timezone)
        I.click(this.inputForm.firstOptionZone)
        I.checkOption(this.inputForm.super)
        I.click(this.buttonSave)
	}


    validateUser() {
        I.seeInCurrentUrl('/user/edit/')
        I.seeElement(this.elementValidation)
        I.waitForElement(this.elementValidation2)
    }

}

export default CreateUser
