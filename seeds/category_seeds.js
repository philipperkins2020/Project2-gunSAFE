const { Category } = require('../models');

const categoryData = [
    {
        category_name: 'Semi-Automatic Rifle',
    },
    {
        category_name: 'Bolt Action Rifle',
    },
    {
        category_name: 'Lever Action Rifle',
    },
    {
        category_name: 'Shotgun',
    },
    {
        category_name: 'Semi-Automatic Handgun/Pistol',
    },
    {
        category_name: 'Revolver',
    },
];

const seedCategory = () => Category.bulkCreate(categoryData);

module.exports = seedCategory;