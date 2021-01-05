const { Sequelize, DataTypes } = require('sequelize');
Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
    return this._applyTimezone(date, options).format('YYYY-MM-DD HH:mm:ss.SSS');
};
const config = require('../models/config');
const sequelize = new Sequelize('xshadyrecords', config.username, config.password, {
    host: 'localhost',
    dialect: 'mssql',
    timezone: '+07:00'
});

const Role = sequelize.define('role', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    path: DataTypes.STRING
}, {
    timestamps: false
});

module.exports = Role;