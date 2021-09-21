require('dotenv').config();//requerimos el dotenv para poder usar las variables creadas en .env//
module.exports = {
  "development": {
    "username": process.env.DB_USERNAME,//usamos estas variables creadas en el archivo .env//
    "password": process.env.DB_PASSWORD,//usamos estas variables creadas en el archivo .env//
    "database": "movies_db",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "port":process.env.DB_PORT,//usamos estas variables creadas en el archivo .env//
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
