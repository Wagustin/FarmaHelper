Feature: HU02: Análisis de Enfermedades
  Como usuario de la aplicación, necesito que FarmaHelper me ayude a detectar las enfermedades que tengo.

  Scenario 1: Inicio del análisis de enfermedad
    Given el usuario está utilizando FarmaHelper
    When investiga la enfermedad que tiene
    Then FarmaHelper debería proporcionar sugerencias de posibles enfermedades

  Scenario 2: Detección de enfermedad
    Given el usuario ha ingresado sus síntomas en FarmaHelper
    When solicita ayuda
    Then FarmaHelper debería ayudarle a detectar qué enfermedad tiene y cómo se trata

  Scenario 3: Recomendación de cuidados
    Given el usuario ha recibido un diagnóstico
    When revisa el tratamiento recomendado
    Then FarmaHelper debería sugerir cuidados y tratamientos adecuados
