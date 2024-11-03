# 💊 FarmaHelper

## Descripción
FarmaHelper es una aplicación web diseñada para ayudar a las personas a encontrar medicamentos y farmacias cercanas de manera rápida y segura. 
La aplicación utiliza algoritmos avanzados para sugerir medicamentos basados en síntomas y proporciona recomendaciones personalizadas, evitando la automedicación y facilitando el acceso a tratamientos adecuados.

## 👥 Autores
* Alfonso Calderon
* Sandro Dinklange
* Adrian Donayre
* Fabián Oliva
* Andrea Santur
* David Torres
* Bryan Tuesta
* Wiliam Ventura
* Ian Vidal

## 🎯 Segmento Objetivo
* Adultos jóvenes que mayormente viven solos y desconocen de las medicinas que pueden tomar al momento de una emergencia
* Adultos mayores necesitados de medicina y sin facilidad de poder ir al doctor a que les den medicinas para sus dolores

## ⭐ Características Principales
1. **Búsqueda de Medicamentos mediante Síntomas**
   - Búsqueda por síntomas
   - Información detallada de medicamentos

2. **Localización de Farmacias**
   - Ubicación de farmacias cercanas
   - Verificación de disponibilidad de medicamentos
   - Rutas y direcciones

3. **Gestión de Citas Médicas**
   - Programación de citas
   - Historial de consultas

## 🛠️ Tecnologías Utilizadas
* HTML5
* CSS3
* JavaScript
* Git/GitHub

## 📁 Estructura del Proyecto

```
public/
├── assets/
│   ├── images/
│   │   └── [imágenes del proyecto]
│   ├── scripts/
│   │   └── main.js
│   └── styles/
│       └── styles.css
├── favicon/
│   └── [archivos favicon]
└── [archivos HTML]
```

## 🚀 Instalación y Uso
1. El código base se encuentra en la rama `develop` del fork principal: `adriandonayredev/FarmaHelper`

2. Crear y clonar tu propio fork:
```bash
# Hacer fork desde GitHub
# Clonar tu fork
git clone https://github.com/[tu-usuario]/FarmaHelper.git
cd FarmaHelper
```

3. Agregar el repositorio principal como remoto:
```bash
git remote add upstream https://github.com/adriandonayredev/FarmaHelper.git
```

## 🤝 Contribución
1. Crear una nueva rama siguiendo las convenciones GitFlow:
```bash
git checkout -b feature/[seccion]-section
# Ejemplo: feature/medicamentos-section, feature/citas-section
```

2. Realizar las modificaciones necesarias.

3. Push a tu rama:
```bash
git add .
git commit -m "Añadida sección [nombre-seccion]"
git push origin feature/[seccion]-section
```

4. Crear Pull Request:
   - Desde: tu-fork/feature/[seccion]-section
   - Hacia: adriandonayredev/FarmaHelper:develop

## 📋 Guía de Estilo y Recomendaciones
1. Crear clases CSS propias, no modificar las existentes
2. Añadir funciones JS sin alterar las existentes
3. Mantener la estructura de nombres de clases e IDs
4. Respetar la paleta de colores definida:
   - Very dark red: #640505
   - Dark red: #b21919
   - Pure red: #ff0000
   - Light grayish red: #f4d4d4
   - Very light gray: #d9d9d9
5. No alterar el comportamiento del header sticky
6. Mantener las animaciones base de transición

---
Desarrollado con ❤️ por el equipo de CuidaMed