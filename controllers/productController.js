const Product = require("../models/product");

const Genre = require("../models/genre");

const Format = require("../models/format");

const Artist = require("../models/artist");


exports.create = async function (req, res) {
    const allGenre = await Genre.findAll({
        attributes: ['id', 'name']
    });
    const allFormat = await Format.findAll({
        attributes: ['id', 'name']
    });
    const allArtist = await Artist.findAll({
        attributes: ['id', 'name']
    });
    res.render('admin/product/form', {
        title: 'Create Product',
        genres: allGenre,
        formats: allFormat,
        artists: allArtist,
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
    const allGenre = await Genre.findAll({
        attributes: ['id', 'name']
    });
    const allFormat = await Format.findAll({
        attributes: ['id', 'name']
    });
    const allArtist = await Artist.findAll({
        attributes: ['id', 'name']
    });
    console.log('oneProduct: ' + JSON.stringify(oneProduct, null, 2))
    res.render('admin/product/form', {
        title: 'Update Product',
        genres: allGenre,
        formats: allFormat,
        artists: allArtist,
        product: oneProduct
    })
};


exports.list = async function (req, res) {
    const allProducts = await Product.findAll({
            // attributes: ['id', 'name', '....']
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
    console.log(JSON.stringify(allProducts, null, 2));
    res.render('admin/product/list', {
        products: allProducts
    });
}

exports.delete = async function (req, res) {

    // setArtist([])
    await Product.destroy({
        where: {
            id: req.params.id
        }
    });
    res.redirect('/admin/product');
}

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
    let updateProduct, newProduct;
    if (req.params.id){
        await Product.update(dataProduct,{
            where: {
                id: req.params.id
            }
        });
        updateProduct = await Product.findOne({
            where:{
                id: req.params.id
            }
        })
    } else {
        newProduct = await Product.create(dataProduct);
    }
    let currentProduct = updateProduct || newProduct;
    console.log('currentProduct: ' + JSON.stringify(currentProduct, null, 2));
    let artistIdList = req.body.artistId;
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