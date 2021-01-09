const express = require('express');
const router = express.Router();

router.use(express.urlencoded({ extended: false }));
const controller = require('../controllers/userController');

router.get('/sign-in', controller.signIn);

router.post('/sign-in', controller.processSignIn);

router.get('/sign-up', controller.signUp);

router.post('/sign-up', controller.store);

module.exports = router;