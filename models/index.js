const User = require('./User');
const Category = require('./Category');
const Personal = require('./Personal');

User.hasMany(Personal, {
    foreignKey: 'user_id'
});

Personal.belongsTo(User, {
    foreignKey: 'user_id'
});

Category.hasMany(Personal, {
    foreignKey: 'type_id'
});

Personal.belongsTo(Category, {
    foreignKey: 'type_id'
});

module.exports = { User, Category, Personal };