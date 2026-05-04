# SECCION 4: PRIMEROS PASOS EN REACT

## 32. Introduccion

## 33. Temas puntuales

En esta sección, se abordarán los fundamentos de React y conceptos esenciales como:

    - Componentes
    - Estructura y nomenclatura
    - Hook - useState
    - CSS condicional
    - Módulos de css
    - Impresiones de variables
    - Props
    - Mucho más

El objetivo de esta sección es establecer una base sólida en los fundamentos de React, sobre la cual podamos continuar desarrollando.

## 34. Primeros proyectos en React

El instructor guía el proceso de creación de un nuevo proyecto de React utilizando Vite a través de la terminal, configurándolo con TypeScript y SWC. Tras crear y renombrar la carpeta del proyecto a "02-first-steps", se instala las dependencias (npm install) y se levanta el servidor de desarrollo local (npm run dev). Posteriormente, en Visual Studio Code, se limpia el código autogenerado en el archivo principal App.tsx, introduciendo el concepto de los "Fragmentos" en React. La clase termina mostrando brevemente (de forma ilustrativa) cómo se vería React insertado directamente en un archivo HTML tradicional, para contrastarlo con el enfoque moderno de Vite que usarán en el curso.

**1. Creación del proyecto con Vite (npm create vite)**

Vite (que significa "rápido" en francés) es una herramienta de construcción de proyectos (un bundler). Hace unos años, el estándar para crear aplicaciones React era create-react-app, pero Vite lo reemplazó porque es abismalmente más rápido para iniciar y actualizar el navegador mientras programas.

Al ejecutar el comando, tomaste tres decisiones clave:

- Framework: React (la biblioteca de interfaces).

- Variante: TypeScript + SWC.

    TypeScript: Para mantener el tipado estricto que ya aprendiste.

    SWC (Speedy Web Compiler): Es un compilador escrito en Rust (un lenguaje de programación de muy bajo nivel y alto rendimiento) que hace que tu código TypeScript se transforme a JavaScript hasta 20 veces más rápido que el compilador tradicional de TypeScript (Babel).

**2. Instalación y Ejecución (npm install y npm run dev)**

npm install: Cuando creas el proyecto, Vite solo te da los "planos" (archivos de configuración). Este comando lee esos planos (el archivo package.json) y va a internet a descargar todo el código de React, Vite, TypeScript y otras herramientas a una carpeta llamada node_modules.

npm run dev: Levanta un servidor local (usualmente en el puerto 5173). Tiene una característica clave llamada HMR (Hot Module Replacement): cuando tú guardas un cambio en tu editor de código, el navegador se actualiza instantáneamente sin recargar toda la página, ahorrándote muchísimo tiempo de desarrollo.

**3. Limpieza del componente App.tsx y los Fragmentos**

El instructor te pide ir al archivo src/App.tsx, que es el "componente principal" o la raíz visual de tu aplicación, y borrar todo lo que Vite puso de ejemplo.

¿Qué es <></>? Estos símbolos extraños se llaman Fragmentos en React.

        - El problema: En React, un componente solo puede retornar un único elemento padre. Si intentas retornar un <h1> y un <p> al mismo tiempo sin envolverlos en algo, React te dará un error.

        - La solución antigua: Envolverlos en un <div>. Esto ensuciaba el código HTML final con miles de <div> innecesarios.

        - La solución moderna (Fragmentos): Al usar <> ... </>, cumples la regla de React de tener un solo contenedor padre, pero a la hora de dibujarse en el navegador web, ese contenedor se vuelve invisible y no afecta la estructura HTML.

**4. La Forma "Antigua" vs. La Forma "Moderna"**

        Al final de la clase, el instructor muestra un archivo index.html que carga React usando etiquetas <script> normales (como importarías cualquier librería antigua).

        Aunque es posible usar React así (para agregar un pequeño widget a un blog de WordPress clásico, por ejemplo), no es mantenible para aplicaciones completas (como la plataforma de educación online que quieres construir). El enfoque que usarás en el curso —usando Vite, archivos .tsx separados y un servidor de desarrollo— te permite tener un proyecto estructurado, con autocompletado y optimizado para la web moderna.


## 35. Estructura de directorios

En esta clase, el instructor hace un recorrido por los archivos de configuración generados automáticamente en la raíz de un proyecto Vite + React + TypeScript. Explica que la mayoría de estos archivos se tocan una sola vez o muy rara vez, ya que el desarrollo del día a día ocurre dentro de la carpeta src. Detalla la función de archivos clave como vite.config.ts, la ventaja de usar SWC en lugar de Babel, los múltiples tsconfig, el núcleo del proyecto en package.json, el punto de entrada en index.html y herramientas de calidad como ESLint y .gitignore.

**1. El Motor y el Compilador**

vite.config.ts: Es el panel de control de Vite. Aquí le indicas a Vite que tu proyecto usa React. En el futuro, si necesitas instalar herramientas como Tailwind CSS o configurar alias para tus carpetas, lo harás aquí.

SWC (Speedy Web Compiler): Aunque no es un archivo, el instructor recalca por qué lo elegimos. Históricamente, React usaba una herramienta llamada Babel para traducir ("transpilar") el código moderno a JavaScript que los navegadores entiendan. SWC hace exactamente lo mismo, pero está escrito en Rust, lo que lo hace ridículamente más rápido.

**2. El Control de TypeScript**

¿Por qué hay tres archivos tsconfig.json? Porque TypeScript necesita saber las reglas del juego dependiendo de dónde se va a ejecutar el código.

    - tsconfig.app.json: Las reglas de tipado para tu aplicación frontend de React (lo que el usuario final usará).

    - tsconfig.node.json: Las reglas para el entorno local. Recuerda que el servidor de desarrollo de Vite corre en Node.js en tu computadora, no en el navegador.

    - tsconfig.json: Es simplemente un archivo maestro que hace referencia a los otros dos para mantener todo organizado.

**3. El Corazón del Proyecto Node**

package.json: Es como la "cédula de identidad" de tu proyecto. Tiene tres partes vitales:

    - Scripts: Atajos para ejecutar comandos. En lugar de escribir comandos larguísimos, usas npm run dev (para arrancar el servidor) o npm run build (para generar el código final de producción).

    - Dependencies (Dependencias de Producción): Librerías obligatorias para que la aplicación funcione (ej. React). Estas viajan al servidor final.

    - DevDependencies (Dependencias de Desarrollo): Herramientas exclusivas para ti como desarrollador (ej. TypeScript, Vite, Linter). Estas no viajan al servidor final, por lo que no afectan el peso de tu página web.

Nota sobre el peso: Tu carpeta pesaba 100 MB porque contiene node_modules, que es donde se descargan todas estas dependencias (las de producción y las de desarrollo). Por suerte, los node_modules nunca se suben a internet.

**4. El Punto de Entrada**

index.html: Este es el único archivo HTML real de tu aplicación. Si te fijas, tiene un <div id="root"></div>. React funciona mediante JavaScript, tomando el control de este div vacío e inyectando toda tu interfaz visual (componentes, botones, imágenes) dinámicamente ahí adentro.

**5. Calidad y Control de Versiones**

ESLint (archivo .eslintrc o similar): Es un supervisor estricto. Analiza tu código en tiempo real y te lanza advertencias (warnings) si declaras variables que no usas o si rompes buenas prácticas. Su objetivo es asegurar que escribas código limpio y estandarizado.

.gitignore: Le dice a Git (tu sistema de control de versiones) qué archivos ignorar. Por ejemplo, siempre incluye la carpeta node_modules para evitar subir esos 100 MB de librerías innecesarias a GitHub.

## 36. Estructura de directorios - Parte 2

El instructor finaliza el recorrido por la estructura de un proyecto Vite + React, enfocándose en los tres directorios principales: node_modules (donde residen las dependencias y sus sub-dependencias, explicando su enorme peso), public (para recursos estáticos) y src (el área de trabajo principal). Además, explica cómo funciona la importación de archivos CSS y el archivo de entrada main.tsx. Finalmente, la clase concluye con una limpieza total del proyecto, borrando archivos base innecesarios para dejar un lienzo en blanco (solo un "Hola Mundo" en el archivo principal) listo para empezar a programar desde cero.

**1. node_modules y el Árbol de Dependencias**

El instructor responde a una duda muy lógica: "Si en mi package.json solo hay 10 dependencias, ¿por qué la carpeta node_modules tiene miles de archivos y pesa 100 MB?"

La respuesta es el árbol de dependencias.

Cuando tú instalas una herramienta (por ejemplo, ESLint), esa herramienta necesita de otras 5 herramientas para funcionar. Y esas 5 herramientas necesitan otras 10 cada una. NPM (Node Package Manager) descarga todas las "dependencias de las dependencias" de forma recursiva.

Regla de oro: Nunca modifiques nada manualmente dentro de node_modules. Si por error borras la carpeta, tu aplicación dejará de funcionar, pero puedes reconstruirla fácilmente ejecutando npm install de nuevo en tu terminal.

**2. La carpeta public**

Esta carpeta es literalmente pública. Todo lo que pongas aquí será servido directamente al navegador sin ser procesado o compilado por Vite.

Uso ideal: Es el lugar perfecto para recursos estáticos pesados o globales, como el favicon (el icono de la pestaña del navegador), fuentes de texto personalizadas o imágenes estáticas fijas.

**3. La carpeta src (Source / Código Fuente)**

Aquí es donde vas a pasar el 99% de tu tiempo como desarrollador.
A diferencia de otros frameworks (como Next.js o Angular) que te obligan a organizar tus carpetas de una manera específica, React puro es completamente flexible. Tú decides si quieres crear carpetas llamadas components, hooks, pages o assets. No hay reglas estrictas impuestas por el sistema, tienes "libertad poética".

**4. Los Archivos CSS (App.css e index.css)**

El instructor menciona cómo los estilos venían pre-configurados:

index.css: Contiene estilos globales. Al importarse en el punto de entrada de la aplicación, estos estilos afectan a toda la página.

App.css: Contiene estilos específicos para el componente App.

Nota del instructor: Importar CSS de esta forma tradicional en React puede hacer que sea difícil rastrear qué clase afecta a qué elemento cuando el proyecto crece, lo que sugiere que más adelante aprenderán formas más eficientes de manejar los estilos.

**5. main.tsx (El Punto de Entrada Real)**

Mientras que index.html es el esqueleto de la página, main.tsx es el corazón de tu código React. Este es el primer archivo de TypeScript que se ejecuta. Su trabajo principal es tomar la aplicación de React y "montarla" (inyectarla) dentro del <div id="root"> que vimos en la clase pasada.

**6. La Limpieza del Proyecto (Clean Slate)**

Para evitar confusiones con código generado automáticamente por Vite que no van a usar, el instructor borra varios archivos para tener un entorno limpio:

Se eliminan: La carpeta assets, App.css, App.tsx y index.css.

Se modifica main.tsx: Se borran las importaciones de los archivos eliminados y se reemplaza la llamada al componente <App/> por un simple <h1>Hola Mundo</h1> dentro del <StrictMode> (un componente especial de React que ayuda a detectar problemas potenciales, del cual hablará en la próxima clase).

¡Con este lienzo en blanco, tu proyecto está 100% configurado y listo para empezar a crear la arquitectura de tu aplicación!

## 37. Mi primer componente

    En esta clase se escribe el primer código real de la interfaz. El instructor explica la función de <React.StrictMode> en el archivo principal y demuestra una de las reglas de oro de la sintaxis JSX: un componente solo puede retornar un único elemento padre. Para aplicar las mejores prácticas de ingeniería de software, se extrae el código de la vista del archivo de configuración inicial (main.tsx) y se crea el primer componente independiente (FirstStepsApp.tsx), explicando la importancia crítica de la capitalización al nombrar estos componentes.

**1. El Guardián: StrictMode**

En tu archivo main.tsx, notarás que el componente principal está envuelto en las etiquetas <React.StrictMode>.

¿Qué hace? Es una herramienta exclusiva del entorno de desarrollo (no afecta el rendimiento en producción). React la utiliza para hacer una doble comprobación de tu código, advirtiéndote si estás usando prácticas obsoletas o si tus componentes tienen efectos secundarios impredecibles.

La recomendación: Nunca lo borres. Mantenerlo activo te obligará a escribir código robusto y libre de bugs "silenciosos".

**2. La Regla de Oro de JSX: Un Único Padre**

Aunque JSX luce casi idéntico a HTML, por debajo se compila a JavaScript puro. Una función en JavaScript no puede retornar múltiples valores sueltos al mismo tiempo; de la misma forma, un componente de React no puede retornar múltiples etiquetas hermanas directamente.

❌ Esto rompe la aplicación:

```typescript
return (
    <h1>Hola Mundo</h1>
    <p>Esto es un párrafo</p>
)
```

✅ La Solución (Fragmentos):
Para agrupar los elementos sin agregar etiquetas <div> innecesarias que ensucien tu estructura del DOM, utilizas los Fragmentos (<> ... </>):

```typescript
return (
    <>
        <h1>Hola Mundo</h1>
        <p>Esto es un párrafo</p>
    </>
)
```

**3. Creación del Primer Componente (FirstStepsApp.tsx)**

El archivo main.tsx debe usarse estrictamente para montar la aplicación y aplicar configuraciones globales. Toda tu interfaz gráfica debe vivir en componentes separados.

Se crea un nuevo archivo en la carpeta src con la extensión .tsx (TypeScript + JSX).

Se utiliza la exportación independiente (export function FirstStepsApp) en lugar de export default. Como aprendiste en las clases de TypeScript, esto facilita el autocompletado exacto al importarlo en otros archivos.

**4. PascalCase: La Capitalización es Obligatoria**

    Notarás que el componente se llama FirstStepsApp (con cada palabra iniciando en mayúscula) y se utiliza en el código como <FirstStepsApp/>.

    ¿Por qué en mayúscula? Esta es la forma en la que el compilador de React diferencia tus componentes personalizados de las etiquetas HTML nativas.

    Si escribes <firstStepsApp /> (en minúscula), React pensará que estás intentando usar una etiqueta HTML estándar que no existe (como un <div> o un <header>), no ejecutará tu función y la aplicación fallará.

    Al realizar esta separación, tu archivo main.tsx queda completamente limpio, delegando toda la responsabilidad visual a FirstStepsApp. ¡Este es el verdadero flujo de trabajo moderno en React!</React.StrictMode></React.StrictMode>

```typescript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirstStepsApp } from './FirstStepsApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirstStepsApp />
  </StrictMode>,
)
```

```typescript
export function FirstStepsApp() {
    return (
        <>
            <h1>Hola Mundo</h1>
            <p>Este es un párrafo de ejemplo.</p>

            <button>Click me</button>

            <div>
            <h2>Hola dentro de un div</h2>
            </div>
        </>
)}
```

## 38. Tarea - Segundo componente

https://gist.github.com/Klerith/d2a55b4eceae48c2f0430e5e386c609b

    1. Crear un componente de React dentro del src lladamo MyAwesomeApp
    2. El componente debe de retornar (cambiar el nombre)

        <h1>Fernando</h1>
        <h3>Herrera</h3>

    3. Hacer las configuraciones respectivas para poder ver el componente en pantalla.

La clase consiste en la resolución de una tarea práctica: crear un componente llamado MyAwesomeApp que renderice un h1 (con tu nombre) y un h3 (con tu apellido). El instructor demuestra paso a paso cómo crear el archivo .tsx, definir el componente (asegurándose de aplicar la regla del elemento padre único usando Fragmentos) e importarlo correctamente en el archivo main.tsx. Además, ilustra el enorme poder de la reutilización al renderizar múltiples instancias del mismo componente y probar cómo un cambio interno se refleja en todas partes al instante.

**1. Estructura y Exportación del Componente**

El instructor muestra dos formas perfectamente válidas de declarar un componente en React:

    - Función Tradicional: export function MyAwesomeApp() { ... }

    - Función de Flecha (Arrow Function): export const MyAwesomeApp = () => { ... }

A nivel de rendimiento en React, ambas son idénticas. La elección entre una u otra suele ser por convención del equipo de trabajo o preferencia personal. Lo vital, como repasamos en la clase anterior, es que la primera letra siempre debe ser mayúscula (MyAwesomeApp, usando PascalCase).

**2. El Manejo del Error de Retorno (Múltiples Elementos)**

Al pegar el h1 y el h3 directamente en el return, React arroja un error en tiempo de desarrollo. Como recordatorio de la clase pasada, JSX exige un único nodo padre.

Nuevamente, el instructor soluciona esto usando Fragmentos (<> ... </>):

```typescript
return (
    <>
        <h1>Tu Nombre</h1>
        <h3>Tu Apellido</h3>
    </>
)
```

**3. Inyección y Reutilización (El verdadero poder de React)**

    En el archivo main.tsx, el instructor importa y coloca el nuevo componente.

    La demostración clave aquí ocurre cuando copia y pega <MyAwesomeApp/> tres veces seguidas dentro de <React.StrictMode>.

    ¿Qué significa esto para tu futuro como desarrollador? Imagina que estás creando la interfaz para el carrito de compras de tus servicios de software. En lugar de escribir el código del botón de "Añadir al carrito" 50 veces, creas un componente <BotonComprar/> y lo usas donde lo necesites.

    Si mañana decides que el botón debe ser azul en lugar de verde, o que debe tener signos de admiración (como demostró el instructor), solo modificas el archivo original y el cambio se propaga instantáneamente a todas las instancias de tu aplicación.

**CODIGO DE LA CLASE**

```typescript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirstStepsApp } from './FirstStepsApp'
import { MyAwesomeApp } from './MyAwesomeApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirstStepsApp />
    <MyAwesomeApp />
  </StrictMode>,
)
```

```typescript
export function MyAwesomeApp() {
    return (
        <>
            <h1>Fermando</h1>
            <h3>Herrera</h3>
        </>
    )
}
```

## 39. Impresión de variables

El instructor enseña cómo inyectar variables de JavaScript dentro del JSX utilizando llaves {}. Explora cómo React renderiza (o se niega a renderizar) diferentes tipos de datos: strings, arreglos, booleanos y objetos literales, ofreciendo soluciones nativas de JavaScript para cada caso (como .join(), operadores ternarios y JSON.stringify). Finalmente, comparte una excelente práctica de optimización de rendimiento: mover las constantes estáticas fuera del cuerpo del componente para evitar re-evaluaciones innecesarias durante las actualizaciones de la interfaz.

**1. Las llaves {}: El puente entre JSX y JavaScript**

En React, no puedes usar ${} dentro del HTML como hacías en los template literals puros. Para ejecutar código JavaScript dentro de la interfaz, debes envolverlo en una sola llave {}.
Cualquier cosa dentro de esas llaves es evaluada como una expresión válida de JavaScript (por ejemplo, escribir { 2 + 2 } imprimirá un 4 en la pantalla).

**2. Reglas de Renderizado según el Tipo de Dato**

React tiene comportamientos muy específicos dependiendo de lo que intentes imprimir en pantalla:

    - Strings y Números: Se imprimen tal cual, sin problemas.

    - Arreglos (Arrays): React los acepta, pero imprime todos los elementos pegados (ej. Elden RingSmashMetal Gear).

        Solución: Utilizar métodos de arreglos como .join(', ') dentro de las llaves para separarlos visualmente.

    - Booleanos (true / false): React renderiza el elemento HTML (como un <h1>), pero su contenido queda totalmente vacío. Esto es intencional, ya que los booleanos se usan para lógicas condicionales, no para mostrarse como texto.

        Solución: Usar un operador ternario para definir qué texto mostrar. Ej: { isActive ? 'Activo' : 'No activo' }.

    - Objetos Literales: ¡Rompen la aplicación! Si intentas imprimir un objeto completo (ej. { address }), React entrará en pánico con un error en consola explicando que los objetos no son hijos válidos. React no sabe cómo traducir una estructura compleja de llaves y valores a texto puro.

        Solución: Convertir el objeto a texto usando { JSON.stringify(address) } o acceder a propiedades específicas del objeto como { address.country }.

**3. Pro-Tip de Rendimiento: Variables Externas**

Al final, el instructor mueve la declaración de las variables fuera de la función FirstStepsApp. Esta es una regla de oro en la arquitectura de React.

¿Por qué es mejor?
En React, cuando un dato interactivo cambia (por ejemplo, si el usuario hace clic en un botón que aumenta un contador), React "re-ejecuta" toda la función del componente para redibujar la pantalla.

    Si tus variables constantes están dentro, React desperdiciará memoria creándolas y destruyéndolas una y otra vez en cada actualización.

    Si están fuera, se crean en la memoria una sola vez cuando el archivo se lee por primera vez, ahorrando recursos valiosos en el ciclo de vida de la aplicación.

```typescript
const firstName = 'Fermando';
const lastName = 'Herrera';
const favoriteGames = ['The Legend of Zelda', 'Super Mario Bros', 'Minecraft'];
const isActive = true;
const address = {
    street: '123 Main St',
    city: 'Anytown',
    country: 'USA'
}

export function MyAwesomeApp() {    
    return (
        <>
            <h1>{firstName}</h1>
            <h3>{lastName}</h3>
            <p>{favoriteGames.join(', ')}</p>
            <h1>{isActive ? 'Active' : 'Inactive'}</h1>
            <p>{JSON.stringify(address)}</p>
        </>
    )
}
```

## 40. Colocar estilos de CSS

La clase se enfoca en cómo aplicar estilos en línea (inline styles) a los elementos dentro de JSX. El instructor explica por qué la sintaxis difiere drásticamente del HTML tradicional (usando camelCase y objetos literales en lugar de strings de texto). Luego, enseña cómo aplicar estilos condicionales dinámicos. Para mantener un código limpio (Clean Code), demuestra cómo extraer esos estilos a una variable externa y tiparla con la interfaz CSSProperties de React para conservar el autocompletado del editor. Finalmente, comparte un truco invaluable en VS Code para descubrir qué tipo de dato requiere cualquier propiedad desconocida.

**1. Estilos en línea: HTML vs JSX**

En el HTML tradicional, los estilos se escriben como una cadena de texto (string). En React, esto generaría un error porque JSX no es HTML, es JavaScript.

    HTML Tradicional: <p style="background-color: red; border-radius: 10px;">
    React (JSX): <p style={{ backgroundColor: 'red', borderRadius: 10 }}>

¿Por qué las dobles llaves {{ }}?

    - La primera llave (exterior) le dice a JSX: "Atención, voy a escribir código JavaScript aquí adentro".
    - La segunda llave (interior) es simplemente la sintaxis de JavaScript para crear un objeto literal.

¿Por qué camelCase?: 
Si escribieras background-color en JavaScript, el motor lo leería como una operación matemática: "A la variable background réstale la variable color". Para evitar este error de sintaxis, React exige que todas las propiedades CSS compuestas se escriban en camelCase (ej. paddingTop, borderRadius).

**2. Estilos Condicionales**

Como los estilos son objetos de JavaScript, puedes inyectar lógica directamente en ellos. Si tienes una variable booleana como isActive, puedes usar un operador ternario para cambiar el diseño al vuelo:

```typescript
style={{ 
    borderRadius: isActive ? 10 : 20 
}}
```

Si isActive es true, el radio será 10; si es false, será 20.

**3. Refactorización y Tipado con CSSProperties**

Escribir un objeto gigante de estilos directamente dentro de la etiqueta <p> hace que el código sea difícil de leer. Lo ideal es extraerlo a una constante.

El problema es que, al sacarlo, TypeScript lo ve como un objeto genérico cualquiera y tu editor de código (VS Code) deja de sugerirte propiedades de CSS (pierdes el IntelliSense).

Para recuperar esa ayuda, debes decirle a TypeScript qué es exactamente ese objeto importando la interfaz CSSProperties desde React:

```typescript
import type { CSSProperties } from 'react';

// Ahora TypeScript te autocompletará colores, márgenes, paddings, etc.
const myStyles: CSSProperties = {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 30
};

// Y el componente queda súper limpio
export const MyComponent = () => {
    return <p style={myStyles}>Párrafo con estilo</p>
}
```

**4. El Pro-Tip: Cómo adivinar los tipos en TypeScript**

El instructor te regala un consejo vital para tu día a día: Nadie tiene memoria fotográfica para recordar todos los tipos de datos en TypeScript.

Si alguna vez no sabes qué tipo de dato necesita una propiedad (como el style), simplemente escribe la propiedad en tu etiqueta JSX, y deja el cursor del ratón quieto encima de ella (Hover).

VS Code abrirá una ventana emergente mostrándote la firma exacta. En este caso, te diría: React.CSSProperties | undefined. Así sabrás inmediatamente qué es lo que necesitas importar y asignar.

```typescript
import type { CSSProperties } from "react";

const firstName = 'Fermando';
const lastName = 'Herrera';
const favoriteGames = ['The Legend of Zelda', 'Super Mario Bros', 'Minecraft'];
const isActive = true;
const address = {
    street: '123 Main St',
    city: 'Anytown',
    country: 'USA'
}

const myStyles: CSSProperties = {
    backgroundColor: 'lightblue',
    padding: '10px',
    borderRadius: '15px',
    marginTop: '30px',
}

export function MyAwesomeApp() {    
    return (
        <>
            <h1>{firstName}</h1>
            <h3>{lastName}</h3>
            <p>{favoriteGames.join(', ')}</p>
            <h1>{isActive ? 'Active' : 'Inactive'}</h1>
            <p style={myStyles}>{JSON.stringify(address)}</p>
        </>
    )
}
```

## 41. Componente - ItemCounter

## 42. Propiedades del componente - Props

## 43. Mostrar listados de elementos

## 44. Eventos de los elementos

## 45. Hook - useState

## 46. Archivos de CSS

## 47. Codigo fuente

## Cuestionario 2: Primeros pasos en React