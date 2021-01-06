const { Sequelize, DataTypes } = require('sequelize');
Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
    return this._applyTimezone(date, options).format('YYYY-MM-DD HH:mm:ss.SSS');
};
const config = require('../models/artist');
const sequelize = new Sequelize('xshadyrecords', config.username, config.password, {
    host: 'localhost',
    dialect: 'mssql',
    timezone: '+07:00'
});

const moment = require('moment');

const Artist = sequelize.define('artist', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    thumbnail: DataTypes.STRING(2083),
    dob: {
        type: DataTypes.DATE,
        get: function() {
            if (moment(this.getDataValue('dob')).isValid()) {
                return moment.utc(this.getDataValue('dob')).format('YYYY-MM-DD');
            } else {
                return null;
            }
        }
    },
    hometown: {
        type: DataTypes.STRING,
    },
    bio: {
        type: DataTypes.TEXT,
    }
}, {
});
module.exports = Artist;
