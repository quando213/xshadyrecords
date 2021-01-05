const express = require('express');
const router = express.Router();

router.use(express.urlencoded({ extended: false }));
const controller = require('../controllers/userAdminController');

router.get('/', controller.getDashboard);

router.get('/user', controller.list);

module.exports = router;