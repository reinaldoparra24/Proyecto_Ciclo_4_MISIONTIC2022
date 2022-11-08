# MERN_TIC_ELECTRONICS

Este es el proyecto para el ciclo 4A - Desarrollo de Aplicaciones Web para el programa MisionTIC2022 Universidad Tecnológica de Pereira

![TIC_ELECTRONICS](/frontend/public/images/TIC_ELECTRONICS.png)

## Website en Heroku

- Heroku : 
- GitHub Pages: https://reinaldoparra24.github.io/MERN_TIC_ELECTRONICS/

## Herramientas Usadas
HTML5 y CSS3, React, Axios conexión a API Store, Node y Express, conexión a MongoDB: Mongoose
- 
## Para correr localmente

### 1. Clonar repositorio
```
$ git clone git@github.com:reinaldoparra24/MERN_TIC_ELECTRONICS.git
$ cd MERN_TIC_ELECTRONICS
```
### 2. Crear Archivo .env
- Duplicar .env.example en la carpeta backend y renombrar a .env

### 3. Configuración MongoDB
- Local MongoDB
  - Instalar MongoDB de https://www.mongodb.com/try/download/community
  - En el archivo .env actualizar MONGODB_URI=mongodb://localhost/TIC_ELECTRONICS
- O en Atlas Cloud MongoDB
  - Crear BD en https://cloud.mongodb.com
  - En el archivo .env actualizar MONGODB_URI=mongodb+srv://Your-db-connection

### 4. Correr Backend
```
$ cd backend
$ npm install
$ npm start
```

### 5. Correr Frontend
```
# Abrir nueva terminal (Dividir Terminal)
$ cd frontend
$ npm install
$ npm start
```

### 6. Muestra de usuarios y productos

- Abre en tu navegador: http://localhost:5000/api/seed
- Devuelve el correo electrónico y la contraseña del administrador y 8 productos de muestra

### 7. Inicio de sesión Administrador

- Abre http://localhost:3000/signin
- Ingrese el correo electrónico y la contraseña del administrador y haga Clic en Iniciar Sesión


Tomado de Videotutorial: https://www.youtube.com/watch?v=CDtPMR5y0QU&t=2256s
