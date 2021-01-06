const express = require('express');
const router = express.Router();

router.use(express.urlencoded({ extended: false }));

const controller = require('../controllers/userAdminController');
const genreController = require('../controllers/genreController');

router.get('/', controller.getDashboard);

router.get('/user', controller.list);

router.get('/genre', genreController.list);

router.get('/genre/create',genreController.create);



module.exports = router;