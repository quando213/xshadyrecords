const Artist = require("../models/artist");

exports.list = async function (req, res) {
    const allArtists = await Artist.findAll();
    res.render('admin/artists/list', {
        artist: allArtists
    });
}