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

const Role = require('../models/role');

const User = sequelize.define('user', {
    email: {
        type: DataTypes.STRING(320),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    fullName: {
        type: DataTypes.VIRTUAL,
        get() {
            return `${this.firstName} ${this.lastName}`;
        },
        set(value) {
            throw new Error('Do not try to set the `fullName` value!');
        }
    },
    address: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING(15),
        allowNull: false
    }
}, {
});
User.belongsTo(Role);
Role.hasMany(User);

module.exports = User;