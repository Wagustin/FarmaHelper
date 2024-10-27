Feature: HU01 Registro de Usuario
  Como usuario de la aplicación, necesito ver que se pueda registrar el usuario y así poder acceder a la interfaz principal.

  Scenario 1: Visualización del formulario de registro
    Given el usuario está en la página de inicio de FarmaHelper
    When hace clic en "Registrar"
    Then debería ver un formulario de registro

  Scenario 2: Registro con datos válidos
    Given el usuario ha completado el formulario de registro con un correo válido y una contraseña fuerte
    When hace clic en "Enviar"
    Then debería recibir un correo de confirmación

  Scenario 3: Activación de cuenta
    Given el usuario ha recibido el correo de confirmación
    When hace clic en el enlace de activación
    Then su cuenta debería ser activada y puede iniciar sesión
