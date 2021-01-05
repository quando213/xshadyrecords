const User = require("../models/user");

exports.getSignInForm = function (req, res) {
    res.render('sign-in');
}

exports.submitSignInForm = async function (req, res) {
    const result = await User.findOne({
        where: {
            email: req.body.email,
            password: req.body.password
        }
    })
    if (result) {
        res.redirect('/');
    } else {
        res.send('Sign in failed.');
    }
}

exports.getSignUpForm = function (req, res) {
    res.render('sign-up');
}

exports.submitSignUpForm = async function (req, res) {
    const newUser = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        address: req.body.address
    })
    res.send(newUser);
}