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

router.get('/artist/create', artistController.create);

router.post('/artist/create', artistController.save);

router.get('/artist/update/:id', artistController.update);

router.post('/artist/update/:id', artistController.save);

router.get('/artist/delete/:id', artistController.delete);

// Format section
router.get('/format', formatController.list)

router.get('/format/create', formatController.create);

router.post('/format/create', formatController.save)

router.get('/format/update/:id', formatController.update);

router.post('/format/update/:id', formatController.save);

router.get('/format/delete/:id', formatController.delete);

// Genre section
router.get('/genre', genreController.list);

router.get('/genre/create', genreController.create);

// User section
router.get('/user', userController.list);

router.get('/user/create', userController.create);

router.post('/user/create', userController.save);

router.get('/user/update/:id', userController.update);

router.post('/user/update/:id', userController.save);

router.get('/user/delete/:id', userController.delete);

module.exports = router;