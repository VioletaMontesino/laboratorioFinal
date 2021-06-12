# Información
Se ha hecho un CRUD usando angular, exkpress y mongodb. Para la parte visual se ha usado angular, router, controller y un servicio para redirigir las llamadas desde el front al back.

# Validaciones
Se ha validado tanto los formularios del front mediante el "validator" de Boostrap, así como en el back en el modelo de moongose.


# Ejecución del Servidor
1 - Abrir cmd y correr "mongod.exe"

2 - En vsCode, entrar en la carpeta "server" ejecutar "npm install" y después "npm run nodemon.start"

Se iniciará el servidor en el puerto 3000


# Ejecución de la Aplicación
Abrir la aplicación en la carpeta "crudAngularMongoExpress" y ejecutar "npm install" y luego "ng serve -o", se abrirá la app en nuestro navegador con "http://localhost:4200"

# Test
Abrir Postman, importar la colección, añadida en la carpeta "postman" del proyecto. Lanzar las queries. Será necesario lanzar el POST primero para crear usuarios.

