module.exports = {
    random_firearm: (catalog) => {
        return Math.floor(Math.random() * catalog.length);
    }
};