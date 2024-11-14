const { I } = inject()
import CreateUser from '../pages/createUser'
import LoginPage from '../pages/LoginPage'


const createUser = new CreateUser()
const loginPage = new LoginPage()

Given(/^Inicio sesion en la pagina con las credenciales de admin (.*), (.*),(.*)$/, (email, password, tenant) => {
	loginPage.visit()
    loginPage.login(email, password, tenant)
    loginPage.validateLogin()
})


When('Verifico que la pagina haya cargado y me encuentre en pagina de Landing', () => {
	createUser.verificarUbicacion()
})

When('Presiono el boton de configuracion, busco y presiono usuario, me envia a la pagina de usuarios y presiono el boton Crear', () => {
	createUser.GoToFormCreateUser()

})

When(/^Lleno los campos con (.*), (.*), (.*), (.*), (.*), (.*), (.*), (.*), (.*) y presiono Guardar$/, (userNames, userLoginName,userEmail,userEmailConfirm,userPassword,userConfirmPassword,userCountry,language,timezone) => {
	createUser.formNewUserFill(userNames, userLoginName,userEmail,userEmailConfirm,userPassword,userConfirmPassword,userCountry,language,timezone)
})
 
Then('Se crea el usuario exitosamente y permite editarlo',()=>{
    createUser.validateUser()
})
