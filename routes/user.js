const express = require('express');
const router = express.Router();

router.use(express.urlencoded({ extended: false }));
const controller = require('../controllers/userController');

router.get('/sign-in', controller.getSignInForm);

router.post('/sign-in', controller.submitSignInForm);

router.get('/sign-up', controller.getSignUpForm);

router.post('/sign-up', controller.submitSignUpForm);

module.exports = router;