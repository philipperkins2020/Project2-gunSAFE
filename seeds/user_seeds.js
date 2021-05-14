const { User } = require('../models');

const userData = [
    {
        username: 'JoeBob',
        email: 'JoeBob@joebob.com',
        password: 'secretpassword1',
    },
    {
        username: 'billyBob',
        email: 'BillyBob@yahoo.com',
        password: 'secretpassword2',
    },
    {
        username: 'CharlieManson',
        email: 'CharlieManson@cmanson.com',
        password: 'secretpassword3',
    },
    {
        username: 'RNixon',
        email: 'RNixon@watergate.com',
        password: 'secretpassword4',
    },
];

const seedUser= () => User.bulkCreate(userData);

module.exports = seedUser;