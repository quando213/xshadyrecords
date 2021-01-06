const Genre = require("../models/genre");

exports.list = async function (req, res) {
    const allGenres = await Genre.findAll();
    res.render('admin/genres/list', {
        genres: allGenres
    });
}

exports.create = async function (req, res) {
    const allGenres = await Genre.findAll();
    res.render('admin/genres/form', {
        create: allGenres
    });
}


