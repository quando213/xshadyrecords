const User = require("../models/user");

exports.getDashboard = function (req, res) {
    res.render('admin/entry/index');
}

exports.list = async function (req, res) {
    const allUsers = await User.findAll();
    res.render('admin/users/list', {
        users: allUsers
    });
}