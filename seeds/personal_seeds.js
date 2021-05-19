const { Personal } = require("../models");

const personalData = [
    {
        manufacturer: "Bushmaster",
        model: "M4-A3",
        type_id: 1, // This may be a number to reference another table
        serial_number: "987-C8-B1969",
        caliber: 5.56,
        barrel_len: 16,
        action: "Semi",
        purchase_date: "6 Apr 2010",
        sloc: "Safe",
        cost: 799.99,
        user_id: 3,
    },
    {
        manufacturer: "Smith & Wesson",
        model: "629",
        type_id: 6, // This may be a number to reference another table
        serial_number: "123-8A-D1988",
        caliber: 44,
        barrel_len: 6,
        action: "Single/Double", 
        purchase_date: "12 Jun 2008",
        sloc: "Safe",
        cost: 1582.99,
        user_id: 3,
    },
    {
        manufacturer: "Springfield Armory",
        model: "1911 EMP",
        type_id: 6, // This may be a number to reference another table
        serial_number: "769-D6-R1889",
        caliber: 9,
        barrel_len: 3,
        action: "Single",
        purchase_date: "29 Oct 2020",
        sloc: "Safe",
        cost: 1249.00,
        user_id: 3,
    },
    {
        manufacturer: "Ruger",
        model: "18028",
        type_id: 2, // This may be a number to reference another table
        serial_number: "424-8A-V4309",
        caliber: "308 Win",
        barrel_len: 20,
        action: "Bolt",
        purchase_date: "13 Feb 2017",
        sloc: "Gun Rack",
        cost: 1599.99,
        user_id: 3,
    },

];

const seedPersonals = () => Personal.bulkCreate(personalData);

module.exports = seedPersonals;