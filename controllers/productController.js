const Product = require("../models/product");
const Genre = require("../models/genre");
const Format = require("../models/format");
const Artist = require("../models/artist");

exports.list = async function (req, res) {
    const allProducts = await Product.findAll({
            include: [{
                model: Genre,
                attributes: ['name']
            }, {
                model: Format,
                attributes: ['name']
            }, {
                model: Artist,
                attributes: ['id', 'name']
            }]
        }
    );
    allProducts.forEach(item => {
        item.artistName = item.artists.map(a => a.name).join(', ');
    })
    res.render('admin/products/list', {
        products: allProducts,
        title: 'Product List'
    });
}

exports.create = async function (req, res) {
    const allGenres = await Genre.findAll({
        attributes: ['id', 'name']
    });
    const allFormats = await Format.findAll({
        attributes: ['id', 'name']
    });
    const allArtists = await Artist.findAll({
        attributes: ['id', 'name']
    });
    res.render('admin/products/form', {
        title: 'Create New Product',
        genres: allGenres,
        formats: allFormats,
        artists: allArtists,
        product: {artists: []}
    })
};

exports.update = async function (req, res) {
    const oneProduct = await Product.findOne({
        include: {
            model: Artist,
            attributes: ['id', 'name'],
            through: {
                attributes: []
            }
        },
        where: {
            id: req.params.id
        },
    });
    const allGenres = await Genre.findAll({
        attributes: ['id', 'name']
    });
    const allFormats = await Format.findAll({
        attributes: ['id', 'name']
    });
    const allArtists = await Artist.findAll({
        attributes: ['id', 'name']
    });
    res.render('admin/products/form', {
        title: 'Update Product',
        genres: allGenres,
        formats: allFormats,
        artists: allArtists,
        product: oneProduct
    })
};

exports.save = async function (req, res) {
    const dataProduct = {
        name: req.body.name,
        price: req.body.price,
        discount: req.body.discount ? req.body.discount : 0,
        stockQuantity: req.body.stockQuantity ? req.body.stockQuantity : 0,
        formatId: req.body.formatId,
        genreId: req.body.genreId,
        isAutographed: req.body.isAutographed,
        isLimited: req.body.isLimited,
        releasedAt: req.body.releasedAt,
    };
    let currentProduct;
    if (req.params.id) {
        await Product.update(dataProduct, {
            where: {
                id: req.params.id
            }
        });
        currentProduct = await Product.findOne({
            where: {
                id: req.params.id
            }
        })
    } else {
        currentProduct = await Product.create(dataProduct);
    }
    let artistIdList = req.body.artistId;
    await currentProduct.setArtists([]);
    if (artistIdList) {
        if (!Array.isArray(artistIdList)) {
            artistIdList = [artistIdList];
        }
        for (let i = 0; i < artistIdList.length; i++) {
            if (artistIdList[i].startsWith('NewArtist: ')) {
                const newArtist = await Artist.create({
                    name: artistIdList[i].slice(11)
                })
                artistIdList[i] = newArtist.id;
            }
            await currentProduct.addArtist(artistIdList[i], {through: {priority: i}});
        }
    }
    res.redirect('/admin/product');
};

exports.delete = async function (req, res) {
    await Product.destroy({
        where: {
            id: req.params.id
        }
    });
    res.redirect('/admin/product');
};