const express = require('express');
const router = express.Router();

router.use(express.urlencoded({ extended: false }));

const productController = require("../controllers/productController");
const artistController = require("../controllers/artistController");
const formatController = require('../controllers/formatController');
const genreController = require('../controllers/genreController');
const userController = require('../controllers/userController');

// Dashboard
router.get('/', function (req, res) {
    res.render('admin/entry/index', {
        title: 'Dashboard'
    });
});

// Product section
router.get('/product', productController.list)

router.get('/product/create', productController.create)

router.post('/product/create', productController.save)

router.get('/product/update/:id', productController.update)

router.post('/product/update/:id', productController.save)

router.get('/product/delete/:id', productController.delete)

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

router.post('/genre/create', genreController.save);

router.get('/genre/update/:id', genreController.update);

router.post('/genre/update/:id', genreController.save);

router.get('/genre/delete/:id', genreController.delete);

// User section
router.get('/user', userController.list);

router.get('/user/create', userController.create);

router.post('/user/create', userController.validate('save'), userController.save);

router.get('/user/update/:id', userController.update);

router.post('/user/update/:id', userController.save);

router.get('/user/delete/:id', userController.delete);

module.exports = router;