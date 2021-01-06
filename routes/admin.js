const express = require('express');
const router = express.Router();

router.use(express.urlencoded({ extended: false }));
const controller = require('../controllers/userAdminController');
const artistController = require("../controllers/artistController");

router.get('/', controller.getDashboard);

router.get('/user', controller.list);

router.get('/artist', artistController.list);

module.exports = router;