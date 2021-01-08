const express = require('express');
const router = express.Router();

router.use(express.urlencoded({ extended: false }));

const formatController = require('../controllers/formatController');
const userController = require('../controllers/userAdminController');
const genreController = require('../controllers/genreController');
const artistController = require("../controllers/artistController");

// Dashboard
router.get('/', function (req, res) {
    res.render('admin/entry/index');
});

// Artist section
router.get('/artist', artistController.list);

// Format section
router.get('/format', formatController.list)

router.get('/format/create', formatController.create);

router.post('/format/create', formatController.save);

// Genre section
router.get('/genre', genreController.list);

router.get('/genre/create', genreController.create);

router.post('/genre/create', genreController.save);

router.get('/genre/update/:id', genreController.update);

router.post('/genre/update/:id', genreController.save);

router.get('/genre/delete/:id', genreController.delete);

// User section
router.get('/user', userController.list);

router.get('/user/create', userController.create);

router.post('/user/create', userController.save);

router.get('/user/update/:id', userController.update);

router.post('/user/update/:id', userController.save);

router.get('/user/delete/:id', userController.delete);

module.exports = router;