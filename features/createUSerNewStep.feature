Feature: Crear un nuevo usuario

    @probandoCrearUser
    Scenario Outline: Scenario Outline para crear un nuevo usuario

        Given Inicio sesion en la pagina con las credenciales de admin <UserNameAdmin>, <UserPasswordAdmin>,<Tenant>

        When Verifico que la pagina haya cargado y me encuentre en pagina de Landing
        And Presiono el boton de configuracion, busco y presiono usuario, me envia a la pagina de usuarios y presiono el boton Crear
        And Lleno los campos con <UserNames>, <UserLoginName>, <UserEmail>, <UserEmailConfirm>, <UserPassword>, <UserConfirmPassword>, <UserCountry>, <Language>, <Timezone> y presiono Guardar

        Then Se crea el usuario exitosamente y permite editarlo

        Examples:
            | UserNameAdmin |UserPasswordAdmin     | Tenant   | UserNames    | UserLoginName | UserEmail              | UserEmailConfirm      | UserPassword | UserConfirmPassword | UserCountry | Language | Timezone |
            | admin         | 2600Admin$uper99     | SUPER99  | Prueba Test  | testUser1     | test1Auto@example.com  | test1Auto@example.com | Test1?1234   | Test1?1234          | Panamá      | Español  | Panama   |


