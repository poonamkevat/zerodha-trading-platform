const {Schema } = require('mongoose');
//schemas is the structure and outline of data
const HoldingsSchema = new Schema({
     name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
});

module.exports = { HoldingsSchema};