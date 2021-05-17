const { Catalog } = require("../models");

const catalogData = [
    {
        ITEMNO: "XX99X9X45",
        MANUFACTURERMODELNO: "XX99X9X45",
        MSRP: "XX99X9X45",
        MODEL: "XX99X9X45",
        CALIBERGAUGE: "XX99X9X45",
        MANUFACTURER: "XX99X9X45",
        TYPE: "XX99X9X45", 
        ACTION: "XX99X9X45", 
        BARRELLENGTH: "XX99X9X45", 
        OVERALLLENGTH: "XX99X9X45", 
        IMAGENAME: "XX99X9X45", 
        ITEMTYPE: "XX99X9X45", 
        FAMILY: "XX99X9X45", 
    }  
];   
    
const seedCatalog = () => Catalog.bulkCreate(catalogData);

module.exports = seedCatalog;