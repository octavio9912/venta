### Documentación del Código para la API de Gestión de Videojuegos, Consolas y Accesorios

#### Descripción General
Este archivo define las rutas para una API que permite a los usuarios autenticados realizar consultas y modificaciones en una base de datos de videojuegos, consolas y accesorios. Utiliza Express.js como framework y se conecta a una base de datos MySQL.

#### Dependencias
- **express**: Framework utilizado para crear el servidor y manejar las rutas.
- **mysql**: Cliente para interactuar con la base de datos MySQL.
- **verifyToken**: Middleware personalizado para verificar la autenticación de los usuarios.

#### Rutas Definidas

##### GET /get-games
- **Descripción**: Retorna todos los videojuegos disponibles en la base de datos si el usuario está autenticado.
- **Parámetros**: No requiere.
- **Respuestas**:
  - **200 OK**: Retorna un array de objetos con la información de los videojuegos.
  - **401 Unauthorized**: Retorna un mensaje indicando que no se tienen suficientes permisos.

##### GET /get-consoles
- **Descripción**: Retorna todas las consolas disponibles en la base de datos si el usuario está autenticado.
- **Parámetros**: No requiere.
- **Respuestas**:
  - **200 OK**: Retorna un array de objetos con la información de las consolas.
  - **401 Unauthorized**: Retorna un mensaje indicando que no se tienen suficientes permisos.

##### GET /get-accessories
- **Descripción**: Retorna todos los accesorios disponibles en la base de datos si el usuario está autenticado.
- **Parámetros**: No requiere.
- **Respuestas**:
  - **200 OK**: Retorna un array de objetos con la información de los accesorios.

#### Casos Especiales y Suposiciones
- Se asume que los datos de entrada siempre están correctamente formateados y son válidos.
- Las rutas están protegidas y solo usuarios autenticados con los roles adecuados pueden realizar acciones específicas.

#### Ejemplos de Uso
```javascript
const axios = require('axios');

// Ejemplo de solicitud GET para obtener juegos
axios.get('http://api.example.com/get-games', {
  headers: {
    'Authorization': 'Bearer YOUR_TOKEN_HERE'
  }
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error('Error:', error);
});

// Ejemplo de solicitud POST para insertar un libro
axios.post('http://api.example.com/insert-book', {
  title: 'Nuevo Libro',
  author: 'Autor Desconocido',
  quantity: 10
}, {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_TOKEN_HERE'
  }
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error('Error:', error);
});

```

Este documento proporciona una visión general y detalles específicos necesarios para interactuar con la API de manera efectiva.

