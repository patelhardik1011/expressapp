var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');

/* GET users listing. */
router.get('/', userController.user_list);

/* User Create Form */
router.get('/create', userController.user_create_get);

/* User Create Form POST Request */
router.post('/create', userController.user_create_post);

/* User Delete POST Request */
router.post('/delete/:id', userController.user_delete_post);

/* User Update Form GET Request */
router.get('/edit/:id', userController.user_update_get);

/* User Delete Form GET Request */
router.post('/edit/:id', userController.user_update_post);

/* Get User Details */
router.get('/:id', userController.user_detail);

module.exports = router;