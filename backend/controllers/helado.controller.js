'use strict'
var fs = require('fs');
const path = require('path');
var Helado = require('../models/helado');
const session = require('express-session');

var controller = {
    guardarHelado: function (req, res) {
        var helado = new Helado(req.body);
        helado.save()
            .then(result => {
                if (!result) return res.status(404).send({ message: "No se han podido guardar los datos" });
                return res.status(200).send({ result });
            })
            .catch(err => {
                console.log(err);
            });
    },

    obtenerHeladoPorNombre: function (req, res) {
        var nombreBuscar = req.params.nombre;
        Helado.findOne({ nombre: nombreBuscar })
            .then(result => {
                if (!result) return res.status(404).send({ message: 'No se encontraron datos con los valores proporcionados' });
                return res.status(200).send({ result });
            })
            .catch(err => {
                console.log(err);
            });
    },
    obtenerHelados: function (req, res) {
        Helado.find({}).sort().exec()
            .then(result => {
                if (!result) return res.status(404).send({ message: 'No se encontraron datos' });
                return res.status(200).send({ result });
            })
            .catch(err => {
                console.log(err);
            });
    },
    actualizarHeladoPorNombre: function (req, res) {
        var helado = req.body;
        Helado.findOneAndUpdate({ nombre: helado.nombre }, helado/*se pasa todos los parametros del helado*/, { new: true })
            .then(result => {
                if (!result) return res.status(404).send({ message: 'No se han podido actualizar los datos' });
                return res.status(200).send({ result });
            })
            .catch(err => {
                console.log(err);
            });
    },
    eliminarHeladoPorNombre: function (req, res) {
        var nombreBuscar = req.params.nombre;
        Helado.findOneAndDelete({ nombre: nombreBuscar })
            .then(result => {
                if (!result) return res.status(404).send({ message: 'No se pudo eliminar el registro' });
                return res.status(200).send({ result });
            })
            .catch(err => {
                console.log(err);
            });
    }
}

module.exports = controller;