# N5AutomationChallenge.

## Bienvenida.

Hola :D, gracias por darme la oportunidad de demostrar mis habilidades con los retos, en este repositorio se encuentra la solución al reto de automatización.

## Desarrollo del desafío.

Las instrucciones son:

1. Iniciar properties.
2. Iniciar google chrome (driver).
3. Navegar a www.netflix.com.
4. Maximizar pantalla.
5. Imprimir titulo.
6. Imprimir URL.

### Aclaraciones

Sobre el punto número uno de iniciar la clase `properties`, se omite, ya que esta (en mi conocimiento) es de Selenium - Java, y este desarrollo se realizó con la librería de **Cypress** de JavaScript.

Respecto al punto dos, igualmente, la librería **Cypress** permite iniciar el driver por medio de una interfaz de usuario, por lo tanto no es necesario instanciar el *driver*, como si se haría con Selenium - Java.

## Información importante

Para ejecutar este proyecto es necesario contar una versión igual o mayor de `NodeJs 18.18.0 LTS`.

### Paso a paso para inciar el proyecto.

Teniendo NodeJs instalado, se debe ubicar en una carpeta (preferiblemente vacía) y ejecutar los siguientes comandos:

```
npm init -y
npm install cypress --save-dev
```

El primer comando inicia npm en la carpeta creando los archivos `package.json` y la carpeta `mode_modules`, se le agrega la etiqueta (tag) `-y` para evitar las preguntas de creación y cree todo por defecto; y el segundo comando instala la librería `Cypress` y los añade en los parámetros del archivo `package.json`.

### Ejecutar el proyecto.

Dentro del archivo `package.json` se crearon dos formas para ejecutar el proyecto.

1. Ejecutar la UI de **Cypress** y desde ahí ejecutar el *único* escenario de prueba creado para el desafía.
2. Realizar una ejecución en segundo plano, que brindará una salida por consola del paso a paso y un informe del resultado, no permitirá visualizar el desarrollo ya que no se verá nada en pantalla.

Para realizar la primera ejecución se introduce el comando por terminal:
```
npm run test
```

Para realizar la segunda ejecución se introduce el comando por terminal:
```
npm run test1
```