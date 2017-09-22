# English

Continuous Integration Demo App made with AngularJS and built with Brunch, including awesome technologies like JSHint or Sass.

You can see it working in: https://cida.herokuapp.com

## Justification

I have developed some Web Apps, all with AngularJS modifying the complementary technologies. However, all the apps have the 
same problems: so many repeated code and very hard maintenance.

Regarding to CSS I found several problems:

1. So many CSS selectors required for html design.
2. So many repeated values along your stylesheets.

These problems are resolved with preprocessors as Sass, which allows you to define CSS styles as a tree.
By this way, if a external library we use changes any stylesheet we could adapt our CSS easily.

We can also resolve the second problem using Sass variables, having a unique value for each CSS property.

On the other hand I had a JavaScript problem because I needed import so many js files in my index.html as controllers or services I 
had created.

With Brunch and other plugins we can compile all our app JS files generating a unique js file, which we must include in our index.html.

I think it's incredible, don't you?

# Español

Aplicación de ejemplo para la integración continua en aplicaciones AngularJS con Brunch, haciendo uso de JSHint o Sass, entre otras.

Puedes probar la aplicación en el enlace: https://cida.herokuapp.com

## Justificación

He desarrollado varias aplicaciones web hasta la fecha, todas con AngularJS y variando el resto de tecnologías. Sin embargo, todas
tenían algo en común: multitud de código repetido y muchas dificultades en el mantenimiento.

En cuanto al CSS me encontré con varios problemas:

1. Multitud de selectores para maquetar un componente.
2. Valores repetidos a lo largo de de una hoja de estilos.

Estos problemas se solucionan con preprocesadores como Sass, el cual te permite la definición de estilos en estructura de árbol.
De esta forma, si alguna librería externa modificara un selector css que nosotros utilizamos, sólo tendríamos que modificarlo en un
único sitio.

También solucionaríamos el segundo problema, ya que podemos definir variables con los valores que utilicemos repetidas veces, así como
colores, márgenes, etc.

En lo que a JavaScript se refiere me encontré con un problema fundamental: cada nuevo módulo desarrollado implicaba tener que importar
en el index.html cada uno de los archivos asociados: controlador, servicio, definición de rutas, etc.

Gracias a Brunch y varios plugins podremos compilar todo el JavaScript de nuestra aplicación en un único fichero, teniendo que
importar un único fichero en nuestro index.html.

Una auténtica pasada, ¿no crees?