const User = require('./User');
const Category = require('./Category');
const Personal = require('./Personal');
const Catalog = require ('./Catalog');

User.hasMany(Personal, {
    foreignKey: 'user_id'
});

Personal.belongsTo(User, {
    foreignKey: 'user_id'
});

Category.hasMany(Personal, {
    foreignKey: 'type_id'
});

// Personal.belongsTo(Category, {
//     foreignKey: 'type_id'
// });

Catalog.belongsTo(Category,  {
    foreignKey: 'category_name'
});

Category.hasMany(Catalog, {
    foreignKey: 'category_name'
});

module.exports = { User, Category, Personal, Catalog };