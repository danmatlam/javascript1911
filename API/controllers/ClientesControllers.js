"use-strict"


const fsRes = require('../firebase-config/firestore').firestoreRef;


global['XMLHttpRequest'] = require('xmlhttprequest').XMLHttpRequest;


     function getClientes(res) {
        fsRes.collection('clientes').get().then(function (response) {
            const clientes = response.docs.map(item =>
                Object.assign(
                    { _id: item.id },
                    item.data()
                )
            );
            res.status(200).send({ clientes });
        }).catch(error => {
            throw error
        });
    }
    // Crea registro -> actualiza para asignarle el _id
    function SaveCliente(req, res) {
        const { foto, nombre, celular, email, estado } = req.body;
        const creationDate = fsRes.FieldValue.serverTimestamp();
        let cliente = { foto, nombre, celular, email, estado, creationDate }
        try {
            fsRes.collection('clientes').add(cliente).then(function (response) {
                if (response.id) {
                    cliente = { ...cliente, 
                               _id: response.id } // agrego id al registro..
                    fsRes.collection('clientes').doc(response.id).update(cliente).then(function (response) {
                        if(response.id){
                            res.status(200).send({ cliente });
                        }
                    }).catch(error => {
                        throw error
                    });
                }
            })
        }
        catch (error) {
            res.status(500).send({ success: false, error, message: "Ocurrió algo!" });
        }
    }
    // Modifica el registro por el _id
    function updateCliente(req, res) {
        const { _id, foto, nombre, celular, email, estado } = req.body;
        console.log('actualizando... ' + _id)
        const updateDate = fsRes.FieldValue.serverTimestamp();
        const cliente = {
            _id,
            foto,
            nombre,
            celular,
            email,
            estado,
            updateDate
        }


        try {
            fsRes.collection('clientes').doc(_id).update(cliente)
                .then(function (response) {
                    console.log(response.id);
                    res.status(200).send({ cliente });
                }).catch(error => {
                    throw error
                });
        }
        catch (error) {
            res.status(500).send({ success: false, error, message: "Ocurrió algo!" });
        }
    }


    module.exports = {
        getClientes,
        SaveCliente,
        updateCliente
    };
    




