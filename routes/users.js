var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');

/* GET users listing. */
router.get('/', userController.user_list);

/* User Create Form */
router.get('/user/create', userController.user_create_get);

/* User Create Form POST Request */
router.post('/user/create', userController.user_create_post);

/* User Delete GET Request */
router.get('/user/:id/delete', userController.user_delete_get);

/* User Delete POST Request */
router.post('/user/:id/delete', userController.user_delete_post);

/* User Update Form GET Request */
router.get('/user/:id/update', userController.user_update_get);

/* User Delete Form GET Request */
router.post('/user/:id/update', userController.user_update_post);

/* Get User Details */
router.get('/user/:id', userController.user_detail);

module.exports = router;