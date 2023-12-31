# Prueba técnica DESARROLLADOR NODEJS 

## Requisitos
El escenario propuesto es una tienda donde el usuario puede seleccionar productos, agregarlos a un carrito de compras. 
### Reglas: 
- [X] Los productos estarán precargados en la BD PostgreSQL.
- [X] Los clientes estarán previamente cargados en la BD PostgreSQL, con un cupo para compras asignado.
- El sistema debe advertir cuándo el cliente sobrepasa sobrepasa su cupo, para no dejar agregar más productos al carrito.
- Se debe registrar las ventas realizadas.
- [X] Pantalla de buscador de productos ordenados por los más vendidos.

### Requerimientos no funcionales:
- Uso de uno o varios patrones de diseño, apropiados para este escenario.
- Implementación de pruebas unitarias y/o funcionales automatizadas (deseable).
- [X] Implementación de docker (deseable).
- [X] Uso de herramienta de documentación de las API's.


## Run app

### Build Dockerfile, run service with Docker compose up
``` Bash
cd api-services-online-store/ && docker compose build && cd ..
cd client-online-store/ && docker compose build && cd ..
docker compose up client_online_store
```

### Run seeders
``` Bash
cd api-services-online-store/api/v1/ 
npx sequelize-cli db:seed:all
cd ../../../
```

### Open URL in browser
``` Browser
http://localhost:8080/
```