const router = require('express').Router();
const userController = require('../../controllers/UserController.js');
const auth = require('../../middlewares/auth');
//const db = require('../../models')



//api/usuario/login
router.post('/login',userController.login);

// //api/usuario/list
// router.get('/list', auth.verificarAdministrador,userController.list);
// //api/usuario/register
// router.post('/add', auth.verificarAdministrador, userController.add);
// //api/usuario/update
// router.put('/update', auth.verificarAdministrador, userController.update);
// //api/usuario/activate    
// router.put('/activate', auth.verificarAdministrador, userController.activate);
// //api/usuario/desactivate    
// router.put('/deactivate', auth.verificarAdministrador, userController.deactivate);


//api/usuario/list
router.get('/list',userController.list);
//api/usuario/register
router.post('/add', userController.add);
//api/usuario/update
router.put('/update', userController.update);
//api/usuario/activate    
router.put('/activate', userController.activate);
//api/usuario/desactivate    
router.put('/deactivate',  userController.deactivate);


// router.get ('/list', function(req, res) {     
//     db.user.findAll().then(users => res.json(users)) });

module.exports = router;
