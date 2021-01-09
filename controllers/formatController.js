const Format = require("../models/format");

exports.list = async function (req, res) {
    const allFormat = await Format.findAll();
    res.render('admin/format/list', {
        format: allFormat
    });
}
exports.create = async function (req, res) {
    res.render('admin/format/form', {
        title: 'Create New Format',
        format: ''
    });
}
exports.save = async function (req, res) {
    const dataFormat = {
        name: req.body.format
    };
    if (req.params.id){
        await Format.update(dataFormat, {
            where: {
                id: req.params.id
            }
        });
        res.redirect('/admin/format')

    }else{
        const newFormat = await Format.create(dataFormat);
            res.redirect('/admin/format');
    }
};

exports.update = async function (req, res) {
    const oneFormat = await Format.findOne({
        where: {
            id: req.params.id
        }
    });
    res.render('admin/format/form', {
        title: 'Update Format',
        format: oneFormat
    });
}
exports.delete = async function (req, res) {
    await Format.destroy( {
        where: {
            id: req.params.id
        }
    });
    res.redirect('/admin/format');
}