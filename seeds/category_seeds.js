const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Rifle',
  },
  {
    category_name: 'Semi-Auto Pistol',
  },
  {
    category_name: 'Shotgun',
  },
  {
    category_name: 'Revolver',
  },
  {
    category_name: 'Accessory-Frames',
  },
  {
    category_name: 'Specialty Handgun',
  },
  {
    category_name: 'Accessory-Receiver Set',
  },
  {
    category_name: 'Muzzleloader',
  },
  {
    category_name: 'Combo',
  },
];

const seedCategory = () => Category.bulkCreate(categoryData);

module.exports = seedCategory;
