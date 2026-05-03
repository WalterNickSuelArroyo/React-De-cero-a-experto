# SECCION 2: INTRODUCCIÓN A REACT Y CONCEPTOS GENERALES

## 5. Iotroducción

## 6. Temas puntuales

En esta sección tendremos dos pequeñas presentaciones sobre:

    ¿Qué es React?
    Puntos importantes sobre React

Yo les recomiendo que si conocen poco o nada sobre React, tomen estos videos con calma, recuerden que vamos a ir dando pasos pequeños hasta crear aplicaciones complejas en React, pero todo empieza con un "Hola Mundo".

¡Te deseamos muchos éxitos en este curso!

## 7. ¿Que es react?

Antes de React, crear interfaces complejas con "Vanilla JS" (JavaScript puro) implicaba manipular el DOM directamente: agregar y quitar listeners a mano y actualizar cada elemento uno por uno cuando una variable cambiaba. Esto resultaba en código difícil de mantener, propenso a errores y poco reutilizable.

La solución de Meta fue crear React: una librería (no un framework) enfocada exclusivamente en construir interfaces de usuario de forma eficiente y ordenada.

**El "Glosario" Indispensable de React**

Estos son los bloques de construcción que usarás todos los días:

    Componentes (Las piezas de Lego): En React, la interfaz se divide en piezas reutilizables. A nivel de código, un componente no es más que una función de JavaScript que retorna algo que visualmente parece HTML.

    JSX / TSX: Es la sintaxis que te permite escribir ese código similar a HTML directamente dentro de JavaScript. Es "azúcar sintáctico" para que no tengas que escribir el tedioso document.createElement por cada <div> o botón.

    Expresiones en {}: Dentro de JSX, puedes usar llaves {} para "escapar" hacia JavaScript. Cualquier cosa entre llaves (una suma, una variable, la invocación de una función como handleClick) será evaluada como código JS válido.

    Virtual DOM: Es el secreto detrás de la velocidad de React. En lugar de actualizar la página web completa (el DOM físico), React mantiene una copia ligera en memoria. Cuando un dato cambia, compara qué pieza exacta se modificó y solo actualiza esa parte específica en el navegador.

    Props (Propiedades): Son los argumentos que le envías a un componente para hacerlo dinámico. Te permiten usar el mismo componente de "Tarjeta" cien veces, pero pasándole un texto o imagen diferente (sus props) a cada una.

    Estado y Hooks (useState): Un "Hook" es una función especial de React. useState sirve para crear una variable de estado; es decir, un dato que la aplicación debe recordar (como un contador) y que, al actualizarse, le avisa a React que debe volver a dibujar esa parte de la pantalla.

**El verdadero secreto de su popularidad**

Aunque React brilla por su curva de aprendizaje, su enfoque en componentes y su enorme comunidad, el instructor destaca una razón corporativa clave: la falta de "breaking changes".

A lo largo de los años, React ha evolucionado sin romper el código antiguo. Para un desarrollador o una empresa con miles de líneas de código, poder actualizar la librería a una versión moderna sin tener que reescribir todo el proyecto es una ventaja invaluable.

La diferencia principal entre ambos conceptos se resume en un principio técnico llamado Inversión de Control (Inversion of Control, o IoC).

En términos sencillos: en una librería, tu código llama a la herramienta; en un framework, la herramienta llama a tu código.

Para entenderlo mejor, usemos una analogía de construcción:

Una librería (React) es como ir a una ferretería. Compras un martillo muy especializado y eficiente (React) para clavar los clavos de tu interfaz gráfica. Tú decides cómo usarlo, cuándo usarlo, y si quieres usar madera, ladrillos o cemento para el resto de la casa. Tú eres el arquitecto y tienes el control total.

Un framework (Angular, Django, Laravel) es como comprar una casa prefabricada. La estructura ya está hecha. Las tuberías y las conexiones eléctricas ya están donde el constructor decidió. Tu trabajo es simplemente pintar las paredes o decidir qué muebles poner en los espacios que el framework te asignó. El framework tiene el control de la arquitectura.

| Característica         | Librería (Ej. React)                                                                 | Framework (Ej. Angular)                                                                                 |
|------------------------|--------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| Quién tiene el control | Tú (tu código)                                                                      | El Framework                                                                                            |
| Estructura             | Flexible. Tú armas la arquitectura de carpetas y flujos a tu gusto.                 | Rígida. Debes seguir los patrones y reglas exactas del creador.                                         |
| Alcance                | Resuelve un problema específico (React solo se encarga de dibujar la Interfaz de Usuario). | Resuelve múltiples problemas (trae herramientas para rutas, peticiones HTTP, manejo de estado, etc.).   |
| Curva de aprendizaje   | Más suave al inicio, pero se complica porque debes aprender a combinarla con otras herramientas. | Más empinada al inicio, pero una vez que la aprendes, ya tienes todo resuelto.                          |

## 8. Puntos importantes sobre React

La decisión arquitectónica: ¿Librería o Meta-framework?
El ecosistema de React te obliga a elegir entre dos caminos principales para tu proyecto:

    React como Librería (El enfoque "A la carta"): Te da libertad total. Solo se encarga de la interfaz. Tú debes investigar, elegir e integrar las herramientas para el enrutamiento, peticiones HTTP, manejo de estado y testing. Eres responsable de mantener la compatibilidad entre todas estas dependencias.

    React como Meta-framework (El enfoque "Todo en uno"): Utilizas herramientas que envuelven a React y te dan una estructura predefinida y opinada. Ya resuelven el enrutamiento y el renderizado (como SSR).

**Las recomendaciones oficiales (y de la industria):**

Para Librería: Vite (como bundler y entorno de desarrollo moderno).

Para Meta-frameworks: Next.js (el estándar actual para SSR y SPAs complejas) o React Router v7+ (para manejo de rutas avanzado).

Para Móvil: React Native con Expo.

**La metodología del curso**

El instructor ha decidido enseñar React como una librería usando Vite.
La estrategia didáctica es empezar con lo básico e ir instalando herramientas externas (dependencias) únicamente conforme vaya surgiendo la necesidad de resolver problemas específicos.

Mencionó algunas de las herramientas estándar que se irán viendo para cubrir los "huecos" de React:

    - Rutas: React Router o TanStack Router.
    - Data Fetching (Peticiones externas): React Query, SWR o RTK Query.

**La apuesta por TypeScript**

El curso se impartirá utilizando TypeScript en lugar de JavaScript puro (Vanilla JS).

¿Por qué? Porque los estándares actuales de la industria (como Next.js y Expo) ya lo utilizan por defecto. Aprender React directamente con tipado estricto facilita el salto a estas tecnologías más complejas.

Beneficios destacados: Detección temprana de errores mientras escribes, autocompletado avanzado (IntelliSense), mejor documentación intrínseca del código y mucha más facilidad para escalar proyectos en equipos grandes.

El trade-off: Requiere escribir un poco más de código y tiene una estructura más rígida en comparación con la flexibilidad de JS puro, pero la seguridad y escalabilidad a largo plazo compensan la inversión inicial.

**El Problema: React no habla el idioma del navegador**

Como viste en el resumen anterior, cuando escribes en React utilizas JSX (código que parece HTML dentro de JavaScript) y probablemente TypeScript.
El problema es que si le entregas un archivo .jsx o .tsx directamente a Google Chrome, el navegador te va a lanzar un error porque no entiende esa sintaxis. Los navegadores solo entienden HTML, CSS y JavaScript estándar.

**La Solución: Vite es el "Traductor" y "Empaquetador"**

Ahí es donde entra Vite. Vite no tiene nada que ver con los botones o la interfaz de tu página (ese es el trabajo de React). Vite es un build tool (herramienta de construcción) que se encarga del trabajo sucio. Hace dos cosas fundamentales:

En Desarrollo (Mientras programas): Levanta un servidor local en tu máquina. Cada vez que guardas un cambio en tu código de React, Vite lo traduce instantáneamente a JavaScript normal y actualiza solo esa pequeña pieza en tu navegador en milisegundos, sin recargar toda la página. A esto se le llama Hot Module Replacement (HMR).

En Producción (Cuando subes tu web a internet): Toma todos tus cientos de archivos y componentes de React, los comprime, los optimiza y los "empaqueta" en unos pocos archivos de JavaScript puro y minificado, listos para ser alojados en cualquier servidor tradicional.

**¿Por qué Vite reemplazó a las herramientas antiguas?**

Durante muchos años, el estándar para React era una herramienta oficial llamada create-react-app (construida sobre Webpack). Pero a medida que los proyectos crecían, Webpack se volvía lentísimo porque reconstruía toda la aplicación con cada cambio. Vite revolucionó esto aprovechando los módulos nativos del navegador (ES Modules), haciendo que iniciar un proyecto o ver cambios en pantalla sea casi instantáneo, sin importar qué tan masiva sea la aplicación.

En resumen: React es la pintura y los ladrillos (tu código y componentes), y Vite es la fábrica que procesa esos materiales para que el navegador los pueda entender.

Vite es una herramienta moderna de construcción (build tool) que traduce tu código de React a JavaScript puro de forma casi instantánea para que el navegador lo entienda, tanto mientras desarrollas como cuando preparas tu web para subirla a internet.