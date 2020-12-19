const router = require('express').Router();
const categoriaController = require('../../controllers/CategoriaControllers');
const auth = require('../../middlewares/auth');
//const db = require('../../models')



//api/categoria/list
router.get('/list', categoriaController.list);
//api/categoria/register
router.post('/add',  categoriaController.add);
//api/categoria/update
router.put('/update',  categoriaController.update);
//api/categoria/activate    
router.put('/activate', categoriaController.activate);
//api/categoria/desactivate    
router.put('/deactivate',  categoriaController.deactivate);

// //api/categoria/list
// router.get('/list', auth.verificarAdministrador,categoriaController.list);
// //api/categoria/register
// router.post('/add', auth.verificarAdministrador, categoriaController.add);
// //api/categoria/update
// router.put('/update', auth.verificarAdministrador, categoriaController.update);
// //api/categoria/activate    
// router.put('/activate', auth.verificarAdministrador, categoriaController.activate);
// //api/categoria/desactivate    
// router.put('/deactivate', auth.verificarAdministrador, categoriaController.deactivate);



// router.get ('/list', function(req, res) {     
//     db.user.findAll().then(users => res.json(users)) });

module.exports = router;