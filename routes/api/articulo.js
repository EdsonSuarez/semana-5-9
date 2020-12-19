const router = require('express').Router();
const articuloControler = require('../../controllers/ArticuloController');
const auth = require('../../middlewares/auth');
//const db = require('../../models')


//api/articulo/list
router.get('/list', articuloControler.list);
//api/articulo/register
router.post('/add',  articuloControler.add);
//api/articulo/update
router.put('/update',  articuloControler.update);
//api/articulo/activate    
router.put('/activate',  articuloControler.activate);
//api/articulo/desactivate    
router.put('/deactivate',  articuloControler.deactivate);

// //api/articulo/list
// router.get('/list', auth.verificarAdministrador,articuloControler.list);
// //api/articulo/register
// router.post('/add', auth.verificarAdministrador, articuloControler.add);
// //api/articulo/update
// router.put('/update', auth.verificarAdministrador, articuloControler.update);
// //api/articulo/activate    
// router.put('/activate', auth.verificarAdministrador, articuloControler.activate);
// //api/articulo/desactivate    
// router.put('/deactivate', auth.verificarAdministrador, articuloControler.deactivate);

module.exports = router;