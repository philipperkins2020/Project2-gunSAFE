const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Catalog extends Model {}
    

Catalog.init(
    {
        ITEMNO: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        MANUFACTURERMODELNO: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        MSRP: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        MODEL: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        CALIBERGAUGE: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        MANUFACTURER: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        TYPE: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ACTION: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        BARRELLENGTH: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        OVERALLLENGTH: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        IMAGENAME: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ITEMTYPE: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        FAMILY: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        
    }, 
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'catalog',
    }
);

module.exports = Catalog;