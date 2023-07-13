# Generador de Consejos

Esta es una aplicación simple que utiliza React para generar consejos aleatorios utilizando la API Advice Slip. Los consejos se obtienen de la API y se muestran en la interfaz de usuario.

## Cómo funciona el código

El código se encuentra en el archivo `App.js` y se divide en los siguientes pasos:

1. Importación de los módulos necesarios:
   - `useState` y `useEffect` de `react` para manejar el estado y los efectos secundarios.
   - `App.css` para los estilos de la aplicación.
   - Las imágenes `patternDivider` y `iconDice` para los recursos visuales.

2. Definición del componente `App`:
   - Se utiliza el `useState` para manejar el estado de `advice` (consejo) y `id`.
   - El `useEffect` se utiliza para cargar un consejo inicial al montar el componente.
   - La función `fetchAdvice` utiliza `fetch` para obtener un consejo de la API Advice Slip y actualizar el estado.
   - La función `generateAdvice` se utiliza para generar un nuevo consejo llamando a `fetchAdvice`.
   - Se renderiza la interfaz de usuario utilizando JSX, mostrando el título, el consejo actual, la imagen y el botón para generar un nuevo consejo.

3. Exportación del componente `App` como valor predeterminado.

## Cómo desplegar la aplicación con Vite

Para desplegar la aplicación con Vite, sigue los siguientes pasos:

1. Asegúrate de tener Node.js instalado en tu máquina.

2. Clona este repositorio o crea una nueva carpeta para el proyecto.

3. Abre la carpeta del proyecto en tu terminal y ejecuta el siguiente comando para instalar las dependencias:

   ```bash
   npm install

   Una vez que se completen las instalaciones, ejecuta el siguiente comando para iniciar la aplicación:

   npm run dev


  La aplicación se abrirá automáticamente en tu navegador en http://localhost:3000. Ahora puedes interactuar con la aplicación y ver los consejos generados.

Contribuciones
Si deseas contribuir a este proyecto, siéntete libre de hacer un fork y enviar tus mejoras a través de pull requests. Estaremos encantados de revisarlas y fusionarlas si son apropiadas.

Autor
Este proyecto fue desarrollado por [johandry rojas] y forma parte de un desafío de programación.

Licencia
Este proyecto está bajo la Licencia MIT.