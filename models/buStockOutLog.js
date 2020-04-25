const mongoose = require('mongoose');

const buStockOutLogSchema = new mongoose.Schema({
    uuid: {
        type: String
    },
    itemId: {
        type: String
    },
    qty: {
        type: Number,
        required: [true, 'Please add quantity']
    },
    buId: {
        type: String
    },
    timeStamp: {
        type: Date,
        default: Date.now
    },
    visitId: {
        type: String
    },
    staffId: {
        type: String
    },
    salePrice: {
        type: String,
        required: [true, 'Please add sale price'],
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('buStockOutLog', buStockOutLogSchema);
