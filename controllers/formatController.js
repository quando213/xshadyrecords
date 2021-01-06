const Format = require("../models/format");

exports.list = async function (req, res) {
    const allFormat = await Format.findAll();
    res.render('admin/format/list', {
        format: allFormat
    });
}
exports.create = async function (req, res) {
    res.render('admin/format/form');
}
exports.save = async function (req, res) {
    const dataFormat = {
        name: req.body.format
    };
    await Format.create(dataFormat)

}