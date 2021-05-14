const seedUser = require('./user_seeds');
const seedPersonal = require('./personal_seeds');
const seedCategory = require('./category_seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedUser();
  console.log('\n----- User SEEDED -----\n');

  await seedPersonal();
  console.log('\n----- Personal SEEDED -----\n');

  await seedCategory();
  console.log('\n----- Category SEEDED -----\n');

  process.exit(0);
};

seedAll();