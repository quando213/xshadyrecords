const User = require("../models/user");

exports.list = async function (req, res) {
    const allUsers = await User.findAll();
    res.render('admin/users/list', {
        users: allUsers
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
    });
}

exports.create = function (req, res) {
    res.render('admin/users/form', {
        title: 'Create New User',
        user: {}
    });
}

exports.save = async function (req, res) {
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
};


exports.delete = async function (req, res) {
        await User.destroy( {
            where: {
                id: req.params.id
            }
        });
        res.redirect('/admin/user');
}