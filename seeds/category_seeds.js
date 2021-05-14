const { Category } = require("../models");

const categoryData = [
  {
    category_name: "Semi-Automatic Rifle",
  },
  {
    category_name: "Bolt Action Rifle",
  },
  {
    category_name: "Lever Action Rifle",
  },
  {
    category_name: "Pump Action Rifle",
  },
  {
    category_name: "Pump Action Shotgun",
  },
  {
    category_name: "Lever Action Shotgun",
  },
  {
    category_name: "Semi-Automatic Shotgun",
  },
  {
    category_name: "Semi-Automatic Handgun/Pistol",
  },
  {
    category_name: "Revolver",
  },
  {
    category_name: "Derringer",
  },
  {
    category_name: "Bolt Action Handgun/Pistol",
  },
];

const seedCategory = () => Category.bulkCreate(categoryData);

module.exports = seedCategory;
