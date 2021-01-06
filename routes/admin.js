const express = require('express');
const router = express.Router();

router.use(express.urlencoded({ extended: false }));

const formatController = require('../controllers/formatController');
const controller = require('../controllers/userAdminController');

router.get('/format', formatController.list)

router.get('/format/create', formatController.create);

router.post('/format/create', formatController.submitcreate);


router.get('/', controller.getDashboard);

router.get('/user', controller.list);

module.exports = router;