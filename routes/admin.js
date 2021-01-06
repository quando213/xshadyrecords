const express = require('express');
const router = express.Router();

router.use(express.urlencoded({ extended: false }));

const controller = require('../controllers/userAdminController');
const genreController = require('../controllers/genreController');
const artistController = require("../controllers/artistController");

router.get('/', controller.getDashboard);

router.get('/user', controller.list);

router.get('/genre', genreController.list);

router.get('/genre/create',genreController.create);

router.get('/artist', artistController.list);

router.get('/user/update/:id', controller.update);

router.post('/user/update/:id', controller.save);

router.post('/user/create',controller.save);

router.get('/user/create',controller.create);

module.exports = router;