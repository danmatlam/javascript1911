
const firebase = require('firebase');
const config = require('./credentials');
try {
    firebase.initializeApp(config);
} catch (err) {
    if (!/already exists/.test(err.message)) {
        console.error('e', err.stack)
    }
}
//Instanciar referencia de firestore(Base de datos)
const firestoreRef = firebase.firestore();
//Exportar referencia de firestore(Base de datos)
module.exports = { firestoreRef };
