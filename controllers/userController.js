const User = require("../models/user");
const {check, validationResult} = require('express-validator');

exports.validate = function (method) {
    switch (method) {
        case 'save': {
            return [
                check('firstName', 'First name is required').exists().not().isEmpty(),
                check('lastName', 'Last name is required').exists().not().isEmpty(),
                check('email', 'Invalid email').exists().isEmail(),
                check('password', 'Password must have at least 8 characters, including 1 uppercase, 1 lowercase and 1 number').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/),
                check('dob', 'Invalid birthday').exists().isDate().not().isAfter(new Date().toDateString()),
                check('phone', 'Invalid phone').exists().isLength({min: 8, max: 15}),
                check('address', 'Address is required').exists().not().isEmpty(),
                check('role', 'Invalid role value').exists().isInt({min: 1, max: 3})
            ]
        }
    }
}

exports.list = async function (req, res) {
    const allUsers = await User.findAll();
    res.render('admin/users/list', {
        users: allUsers,
        title: 'User List'
    });
}

exports.create = function (req, res) {
    res.render('admin/users/form', {
        title: 'Create New User',
        user: {},
        errors: []
    });
}

exports.update = async function (req, res) {
    const oneUser = await User.findOne({
        where: {
            id: req.params.id
        }
    });
    res.render('admin/users/form', {
        title: 'Update User',
        user: oneUser,
        errors: []
    });
}

exports.save = async function (req, res) {
    var errors = validationResult(req);
    if (errors.isEmpty()) {
        const dataUser = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            dob: req.body.dob,
            phone: req.body.phone,
            address: req.body.address,
            role: req.body.role
        };
        if (req.params.id) {
            await User.update(dataUser, {
                where: {
                    id: req.params.id
                }
            });
            res.redirect('/admin/user');
        } else {
            await User.create(dataUser);
            res.redirect('/admin/user');
        }
    } else {
        res.render('admin/users/form', {
            title: 'Update User',
            user: {},
            errors: errors.array()
        });
    }
};


exports.delete = async function (req, res) {
    await User.destroy({
        where: {
            id: req.params.id
        }
    });
    res.redirect('/admin/user');
}

exports.signIn = function (req, res) {
    res.render('sign-in');
}

exports.processSignIn = async function (req, res) {
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

exports.signUp = function (req, res) {
    res.render('sign-up');
}

exports.store = async function (req, res) {
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