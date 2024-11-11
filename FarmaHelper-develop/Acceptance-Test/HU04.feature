Feature: HU04: Pagos Seguros
  Como usuario de FarmaHelper, quisiera que cuando envíe mis datos para efectuar pagos o realizar compras en la aplicación, mis datos estén seguros.

  Scenario 1: Protección de datos de pago
    Given el usuario está realizando un pago
    When ingresa sus datos de pago
    Then los datos deberían ser protegidos por FarmaHelper

  Scenario 2: Confirmación de pago
    Given el usuario ha completado un pago
    When el pago se efectúa exitosamente
    Then el usuario debería recibir una confirmación y respaldo de FarmaHelper

  Scenario 3: Comprobante de compra y entrega
    Given el usuario ha completado una compra
    When el sistema genera el comprobante de pago
    Then debería recibir la ubicación del domicilio para su entrega y la boleta de compra
