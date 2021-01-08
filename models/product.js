const {Sequelize, DataTypes} = require('sequelize');
Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
    return this._applyTimezone(date, options).format('YYYY-MM-DD HH:mm:ss.SSS');
};
const config = require('../models/config');
const sequelize = new Sequelize('xshadyrecords', config.username, config.password, {
    host: 'localhost',
    dialect: 'mssql',
    timezone: '+07:00'
});
const moment = require('moment');

const Format = require('../models/format');
const Genre = require('../models/genre');
const Artist = require('../models/artist');
const ProductArtist = require('../models/productArtist');


const Product = sequelize.define('Products', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    stockQuantity: DataTypes.INTEGER,
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    discount: DataTypes.INTEGER,
    isLimited: DataTypes.BOOLEAN,
    isAutographed: DataTypes.BOOLEAN,
    releasedAt: {
        type: DataTypes.DATE,
        get: function() {
            if (moment(this.getDataValue('releasedAt')).isValid()) {
                return moment.utc(this.getDataValue('releasedAt')).format('YYYY-MM-DD');
            } else {
                return null;
            }
        }
    }
}, {
    paranoid: true
});

Product.belongsTo(Format);
Format.hasMany(Product);

Product.belongsTo(Genre);
Genre.hasMany(Product);

Product.belongsToMany(Artist, {through: ProductArtist});
Artist.belongsToMany(Product, {through: ProductArtist});

module.exports = Product;