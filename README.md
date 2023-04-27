## Ejemplo de código con malas prácticas KISS
Este ejemplo de código JavaScript muestra cómo no seguir la práctica KISS (Keep It Simple, Stupid). El código utiliza una constante innecesaria para almacenar el valor de pi, en lugar de simplemente utilizar el valor de pi directamente en la fórmula. Este código se puede utilizar como un ejemplo de lo que no se debe hacer al seguir la práctica KISS.

## Ejemplo de código con buenas prácticas KISS
Este ejemplo de código JavaScript muestra cómo seguir la práctica KISS (Keep It Simple, Stupid). El código utiliza directamente el valor de pi en la fórmula para calcular el área del círculo, en lugar de utilizar una constante innecesaria. Este código se puede utilizar como un ejemplo de cómo seguir la práctica KISS.

## Ejemplo de código con malas prácticas DRY
Este ejemplo de código JavaScript muestra cómo no seguir la práctica DRY (Don't Repeat Yourself). El código repite la lógica para obtener el nombre completo dos veces en el código, lo que puede dificultar su mantenimiento y extensión. Este código se puede utilizar como un ejemplo de lo que no se debe hacer al seguir la práctica DRY.

## Ejemplo de código con buenas prácticas DRY
Este ejemplo de código JavaScript muestra cómo seguir la práctica DRY (Don't Repeat Yourself). El código utiliza la función getFullName() para obtener el nombre completo y se reutiliza en la función logFullName(), eliminando la duplicación de código y haciéndolo más fácil de entender, mantener y extender. Este código se puede utilizar como un ejemplo de cómo seguir la práctica DRY.
---------------------------------------------------------------------------

##Ejemplo con buenas prácticas de KISS:
Commit: Agregar funciones de validación de usuario y productos

Descripción: En este commit se agregaron dos funciones en el archivo validaciones.js que se encargan de validar los datos de usuario y de productos. Se aplicó el principio KISS, manteniendo las funciones simples y legibles.

##Ejemplo con malas prácticas de KISS:
Commit: Agregar funciones de validación de usuario y productos

Descripción: Este commit agrega dos funciones en el archivo validaciones.js que se encargan de validar los datos de usuario y de productos. Sin embargo, las funciones son muy complejas y contienen muchos bloques de código anidados, lo que dificulta su legibilidad y mantenimiento.

##Ejemplo con buenas prácticas de DRY:
Commit: Refactorizar funciones de operaciones matemáticas

Descripción: En este commit se refactorizó el archivo math-operations.js para aplicar la práctica DRY. Se extrajo el bloque de validación de parámetros en una función aparte llamada validarParametros, que es utilizada por las funciones sumar y restar.

##Ejemplo con malas prácticas de DRY:
Commit: Agregar funciones de operaciones matemáticas

Descripción: Este commit agrega dos funciones en el archivo operaciones-matematicas.js que realizan operaciones matemáticas. Sin embargo, ambas funciones contienen el mismo bloque de código para validar los parámetros, lo que viola la práctica DRY y aumenta la complejidad del código.
