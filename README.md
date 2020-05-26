# simetrik-test
## Juan Carlos Hernandez Ramos

### requirements: NodeJs

1. `cd ./express-app`, `npm i`, `npm run dev`; navigate to localhost:8000
2. `cd ./next-app`, `npm i`, `npm run dev`; navigate to localhost:3000
  - / or /list you can interact with searchable list 
  - /chart is located some charts examples

4. ¿Porque no debería usar la libreria ​JQuery​, ​si estoy usando ​ReactJS​?
  - React utiliza DOM virtual para interactuar y actualizar según diferencias con el objeto del explorador.
5. ¿Porque usarias ​Hooks d​e las nuevas versiones de ​ReactJS, ​en lugar de ​class component​?
  - Permite trabajar más amigablemente con el concepto de programación funcional y facilita la implementación de hooks propios, por ejemplo, para mantener sincronizado las propiedades iniciales de los componentes.
6. ¿Que es un archivo ​JSX?​
  - definición de tipo que permite escribir lenguaje de marcas HTML y modificadores en javascript.
7. ¿Que diferencia hay entre una ​function ​y una ​arrow function​ de Javascript?
  - varias diferencias, es importante resaltar el tema del contexto, las funciopnes regulares son construidas al momento que se leen por lo tanto disponen de contexto propio mientras en una función flecha el contexto es global 
8. ¿Que es ​Redux​ y​ cómo nos ayuda en los proyectos?
  - Puede definirce como una colección de estados y actuadores para mantener un mapa global de la aplicación.
9. ¿Que nos permite hacer la siguiente declaración?
  const ​anyFunction = (​param_1​) => (​param_2​) =>​ ​param_1 ​+​ ​param_2
  - En esté caso retorna una función anidada 
    -> (param2 => param1 + param2) 
    donde param1 ya se encuentra instanciado.
