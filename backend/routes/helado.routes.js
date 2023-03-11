'use strict'
var express=require('express');
var router=express.Router();
var heladoController=require('../controllers/helado.controller');

// guardar tipo
router.post('/helado',heladoController.guardarHelado);
// obtener tipo por nombre
router.get('/helado/:nombre',heladoController.obtenerHeladoPorNombre)
// obtener tipos
router.get('/helado',heladoController.obtenerHelados);
// actualizar tipo por nombre
router.put('/helado',heladoController.actualizarHeladoPorNombre);
// eliminar tipo por nombre
router.delete('/helado/:nombre',heladoController.eliminarHeladoPorNombre);

module.exports=router;