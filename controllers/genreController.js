const Genre = require("../models/genre");

exports.list = async function (req, res) {
    const allGenres = await Genre.findAll();
    res.render('admin/genres/list', {
        genres: allGenres,
        title: 'Genre List'
    });
}

exports.create = async function (req, res) {
    res.render('admin/genres/form', {
        title: 'Create New Genre',
        genre: {}
    });
}

exports.update = async function (req, res) {
    const oneGenre = await Genre.findOne({
        where: {
            id: req.params.id
        }
    });
    res.render('admin/genres/form', {
        title: 'Update Genre',
        genre: oneGenre
    });
}

exports.save = async function (req, res) {
    const dataGenre = {
        name: req.body.genre,
        description: req.body.description
    };
    if (req.params.id) {
        await Genre.update(dataGenre, {
            where: {
                id: req.params.id
            }
        });
        res.redirect('/admin/genre');
    } else {
        await Genre.create(dataGenre);
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


