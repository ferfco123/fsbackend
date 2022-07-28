var express = require('express');
var router = express.Router();
const {verUsuarios,verUsuario,searchName,searchSurname,searchAdress,searcCity,searchProvince,searchPostalcode,searchCountry,searchAge,searchEmail,crearUsuario,editarUsuario,eliminarUsuario,externalApi}= require  (`../controllers/controllers.js`)
const {validarId, chequeos} = require(`../middleware/middlewares.js`)



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});




router.get(`/ver`,verUsuarios)
router.get(`/ver/:id`,validarId,verUsuario)
router.get(`/ver/:name`,validarId,searchName)
router.get(`/ver/:surname`,validarId,searchSurname)
router.get(`/ver/:adress`,validarId,searchAdress)
router.get(`/ver/:city`,validarId,searchCity)
router.get(`/ver/:province`,validarId,searchProvince)
router.get(`/ver/:postalCode`,validarId,searchPostalcode)
router.get(`/ver/:country`,validarId,searchCountry)
router.get(`/ver/:age`,validarId,searchAge)
router.get(`/ver/:email`,validarId,searchEmail)
router.get(`/APIexterna`,externalApi)
router.post(`/crear`,chequeos,crearUsuario)
router.put(`/editar`,chequeos,editarUsuario)
router.delete(`/eliminar/:id`,validarId,eliminarUsuario)



module.exports = router;
