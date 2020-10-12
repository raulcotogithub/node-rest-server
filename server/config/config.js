//
//========================================
//puerto
//=======================================
process.env.PORT = process.env.PORT || 3000;

//Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//========================================
//Vencimiento del token
//=======================================
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

//========================================
//SEED de autenticación
//=======================================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';


//========================================
//google CLIENT ID
//=======================================
process.env.CLIENT_ID = process.env.CLIENT_ID || '839312648378-qqdl6mbtpjl3l0i9ldfagp81sd9hc7ps.apps.googleusercontent.com';


//=======================================
// Base de Datos
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
};


process.env.URLDB = urlDB;