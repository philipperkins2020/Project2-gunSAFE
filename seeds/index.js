const seedUser = require('./user_seeds');
const seedPersonal = require('./personal_seeds');
const seedCategory = require('./category_seeds');
const seedCatalog = require('./catalog_seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    
    await seedUser();
    console.log('\n----- User SEEDED -----\n');

    await seedCategory();
    console.log('\n----- Category SEEDED -----\n');

    await seedCatalog();
    console.log('\n----- Catalog SEEDED -----\n');

    await seedPersonal();
    console.log('\n----- Personal SEEDED -----\n');

    process.exit(0);
  } catch (err) {
    console.log(err);
  }
};

seedAll();