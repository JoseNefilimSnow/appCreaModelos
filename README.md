# Creador de modelos Odoo+Ionic+Electron:
### Aplicación de escritorio para creación de modelos en Odoo


## Descripción Breve:

A la hora de crear una aplicaión en Odoo podemos diferenciar 2 grandes elementos:
- Vistas
- Modelos
Este ultimo es el que realmente interesa puesto que es él el que permite un CRUD de instancias. 
Esta pequeña aplicación de escritorio te permite la creación de modelos con los que cualquier otra aplicación puede interactuar(aunque por la falta de vistas sea imposible para el Framework de Odoo)

## Como funciona

En este repositorio encontraras 2 carpetas, una contiene la app construida(abrir el ejecutable y usar) y en la otra todo su código. 
La app trabaja con localhost, solo introducimos la base de datos de odoo que queremos acceder y los credenciales de  inicio de sesion del superusuario y el resto es mas que intuitivo.

## Cuaderno de batalla

Ahora mismo "Relación uno a muchos" o one2many está deshabilitada por un error que no permite crear campos de este tipo
