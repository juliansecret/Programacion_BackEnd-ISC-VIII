/*
REFLEXIÓN - EJERCICIO 1.3

1. Diferencia entre un módulo nativo y un módulo de NPM:

Un módulo nativo (como 'fs') ya viene incluido dentro de Node.js.
No necesita instalarse con npm porque forma parte del entorno de ejecución.
Su origen es el propio equipo de desarrollo de Node.js.

En cambio, un módulo de NPM (como 'sillyname') es un paquete externo
creado por terceros y alojado en el registro de NPM. Para usarlo es
necesario instalarlo previamente con el comando `npm install nombre-paquete`,
lo que genera la carpeta node_modules y actualiza el package.json.

En resumen:
- Módulo nativo → ya viene con Node.
- Módulo NPM → se instala desde internet.


2. Diferencia entre 'require' (CommonJS) e 'import' (ES Modules):

'require' pertenece al sistema CommonJS.
- La carga de módulos es dinámica (en tiempo de ejecución).
- Puede usarse dentro de funciones o condicionales.
- Es el sistema tradicional de Node.js.

'import' pertenece a ES Modules.
- La carga es estática (se analiza antes de ejecutar el código).
- Debe colocarse en la parte superior del archivo.
- Es el estándar moderno de JavaScript.

La diferencia principal es que 'require' carga módulos en tiempo de ejecución,
mientras que 'import' se procesa antes de que el código comience a ejecutarse.


3. Sobre el archivo package.json:

a) Es vital compartir package.json porque contiene la lista de dependencias
del proyecto y su configuración. No se debe subir la carpeta node_modules
porque:
- Es muy pesada.
- Puede regenerarse automáticamente.
- Haría el repositorio innecesariamente grande.

b) Si ejecutas `npm install` en una carpeta que solo tiene package.json,
NPM leerá las dependencias declaradas y descargará automáticamente todos
los paquetes necesarios dentro de la carpeta node_modules, recreando
el entorno completo del proyecto.
*/