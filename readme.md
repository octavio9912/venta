# Instrucciones de Instalación y Ejecución

## 1. Importar la Base de Datos MySQL

Para importar la base de datos MySQL, puedes hacerlo desde PHPMyAdmin utilizando el botón de importar, o si prefieres la línea de comandos, ejecuta el siguiente comando:

```mysql
mysql -u tu_usuario -p gamestore < gameStorev6.sql
```

Asegúrate de reemplazar `tu_usuario` y `tu_base_de_datos` con los valores correspondientes.

## 2. Configurar el Backend

1. Posiciónate en la ruta /Backend/Node.
2. Modifica el archivo .env e ingresa el usuario y contraseña correspondientes a tu base de datos en las variables DBUSER y DBPASS (esto para que el backend se comunique con la base de datos).
3. Ejecuta el comando `npm install` para instalar todas las dependencias.

Para ejecutar el backend, utiliza el siguiente comando:

```bash
npm run start
```

## 3. Configurar el Frontend

1. Posiciónate en la ruta /Frontend/.
2. Ejecuta el comando `npm install` para instalar las dependencias.

Para ejecutar el frontend, utiliza el siguiente comando:

```bash
npm run start
```


Cuando se te solicite, ingresa la tecla 'y' para aceptar el cambio de puerto, ya que el backend ocupa el puerto 3000 y el frontend intentará usar el mismo.

## Acceder al Sitio

Una vez que hayas configurado y ejecutado tanto el backend como el frontend, dirígete en tu navegador a la dirección localhost:3001 y se visualizará el sitio.

