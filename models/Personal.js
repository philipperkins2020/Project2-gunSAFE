const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Personal extends Model {}


Personal.init(
  {
   
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    manufacturer: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    model: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    type_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "category",
            key: "id",
        },
    },

    serial_number: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    caliber: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    barrel_len: {
        type: DataTypes.DECIMAL(5,2),
        allowNull: true,
    },

    action: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    purchase_date: {
        type: DataTypes.DATE,
        allowNull: true,
    },

    sloc: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    cost: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
  },

    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    }
  },
  {
    sequelize,
    timestamps: false,
    // True for freezeTableName will not add an "s" to modelName
    freezeTableName: true,
    underscored: true,
    modelName: "personal",
  }
);

module.exports = Personal;
