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

exports.update = async function (req, res) {
    const oneGenre = await Genre.findOne({
        where: {
            id:req.params.id
        }
    });
    res.render('admin/genres/form', {
        title: 'Update Genre',
        genre: oneGenre
    });
}

exports.save = async function (req, res) {
    const dataGener = {
       name: req.body.genres,
        description: req.body.description
    };
    if (req.params.id) {
        await Genre.update(dataGener, {
            where: {
                id: req.params.id
            }
        });
        res.redirect('/admin/genre');
    } else {
        await Genre.create(dataGener);
        res.redirect('/admin/genre');
    }
};

exports.delete = async function (req, res) {
    await Genre.destroy({
        where: {
            id: req.params.id
        }
    });
    res.redirect('/admin/genre');
}


