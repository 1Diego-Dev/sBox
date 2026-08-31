# sBox - Tu Buscador de Series Minimalista

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

## Enlace al Proyecto en Vivo
Puedes probar la aplicación funcionando en el siguiente enlace: 
**[🔗 Visitar sBox en vivo]([https://1diego-dev.github.io/sBox/])**
___
## 📝 Sobre el Proyecto
**sBox** es una *Single Page Application* (SPA) diseñada para los amantes de la televisión. Funciona como un motor de búsqueda rápido y minimalista que permite a los usuarios introducir palabras clave para consultar una base de datos global. Los usuarios pueden ver coincidencias instantáneas de series, incluyendo portadas, resúmenes sin spoilers y valoraciones, además de poder guardar sus hallazgos en una colección personal.

Este proyecto con un enfoque estricto en la arquitectura del Front-End, el diseño responsivo y el manejo de estados complejos en React.
___
## Funcionalidades y Arquitectura
*   **Búsqueda en Tiempo Real:** Consumo asíncrono de la API pública de **[TVmaze]([https://www.tvmaze.com/api])** para devolver resultados precisos.
*   **Gestión de Estados Vacíos y Errores:** Renderizado condicional dinámico para manejar búsquedas fallidas, estados de carga (Preloader) y colecciones vacías.
*   **Persistencia de Datos:** Sistema de guardado automático (LIFO - Last In, First Out) de series favoritas utilizando el `localStorage` del navegador.
*   **Enrutamiento Seguro:** Navegación fluida sin recargas utilizando `react-router-dom`, incluyendo protección de rutas inexistentes con una página personalizada de error 404.
*   **UI/UX Responsivo:** Interfaz adaptada a todas las resoluciones mediante CSS y metodología BEM, incluyendo un menú de navegación tipo hamburguesa para dispositivos móviles y modales dinámicos.
___
## Tecnologías Utilizadas
*   **Core:** HTML5, CSS3, JavaScript (ES6+).
*   **Framework/Librería:** React (Functional Components, Hooks: `useState`, `useEffect`).
*   **Herramientas de Construcción:** Vite (Bundler).
*   **Estilos:** CSS puro siguiendo estrictamente la metodología **BEM** (Block Element Modifier).
*   **APIs Externas:** TVmaze API (Fetch API).
___
## Próximas Mejoras (Roadmap)
El desarrollo de sBox continúa evolucionando. Las futuras implementaciones se centrarán en enriquecer la interfaz y la experiencia del usuario:
- [ ] **Detalles Expandibles:** Añadir interacción a las tarjetas para que, al hacer clic, se despliegue un submenú o modal mostrando las temporadas y episodios de la serie.
- [ ] **Filtros Avanzados:** Implementar un sistema de filtrado en los resultados de búsqueda (por género, año de lanzamiento o calificación).
- [ ] **Micro-interacciones:** Añadir animaciones de transición fluidas usando CSS o *Framer Motion* al navegar entre las rutas de la aplicación.
- [ ] **Validación de Formularios en Tiempo Real:** Mejorar el popup de inscripción/inicio de sesión con mensajes de error dinámicos para los inputs.
___
## Instalación Local
Si deseas clonar y ejecutar este proyecto en tu entorno local, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/1Diego-Dev/sBox.git
   ```

2. Accede al directorio del proyecto:
   ```bash
   cd tu-repositorio
   ```

3. Instala las dependencias necesarias:
   ```bash
   npm install
   ```

4. Inicia el servidor de desarrollo local:
   ```bash
   npm run dev
   ```
