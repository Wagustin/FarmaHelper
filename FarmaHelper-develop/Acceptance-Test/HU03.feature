Feature: HU03: Tipos de Enfermedades
  Como usuario quisiera saber los tipos o variantes de enfermedades que menciona FarmaHelper.

  Scenario 1: Análisis de variantes de enfermedad
    Given el usuario está investigando una enfermedad en FarmaHelper
    When selecciona una enfermedad
    Then FarmaHelper debería mostrar las variantes disponibles

  Scenario 2: Selección de variante de enfermedad
    Given el usuario ha visto las variantes de una enfermedad
    When selecciona una variante específica
    Then FarmaHelper debería mostrar los cuidados y restricciones asociados

  Scenario 3: Recomendación de medicamentos
    Given el usuario ha seleccionado una variante específica de enfermedad
    When consulta los tratamientos
    Then FarmaHelper debería recomendar medicamentos y dosis para un cuidado óptimo
