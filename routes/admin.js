const express = require('express');
const router = express.Router();

router.use(express.urlencoded({ extended: false }));
const controller = require('../controllers/userAdminController');

router.get('/', controller.getDashboard);

router.get('/user', controller.list);

router.get('/user/update/:id', controller.update);

router.post('/user/update/:id', controller.save);

router.post('/user/create',controller.save);

router.get('/user/create',controller.create);

router.get('/user/create',controller.create);

router.get('/user/delete/:id',controller.delete);







module.exports = router;