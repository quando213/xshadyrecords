const Artist = require("../models/artist");

exports.list = async function (req, res) {
    const allArtists = await Artist.findAll();
    res.render('admin/artists/list', {
        artist: allArtists,
        title: 'Artist List'
    });
}

exports.create = function (req, res) {
    res.render('admin/artists/form', {
        title: 'Create New Artist',
        artist: {}
    });
}

exports.update = async function (req, res) {
    const oneArtist = await Artist.findOne({
        where: {
            id: req.params.id
        }
    });
    res.render('admin/artists/form', {
        title: 'Update Artist',
        artist: oneArtist
    });
}

exports.save = async function (req, res) {
    const artistData = {
        name: req.body.name,
        thumbnail: req.body.thumbnail,
        dob: req.body.dob,
        hometown: req.body.hometown,
        bio: req.body.bio,
    }
    if (req.params.id) {
        await Artist.update(artistData, {
            where: {
                id: req.params.id
            }
        });
        res.redirect('/admin/artist');
    } else {
        const newArtist = await Artist.create(artistData);
        res.redirect('/admin/artist');
    }
}

exports.delete = async function (req, res) {
    await Artist.destroy({
        where: {
            id: req.params.id
        }
    });
    res.redirect('/admin/artist');
}