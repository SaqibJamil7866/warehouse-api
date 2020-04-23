const mongoose = require('mongoose');

const buStockOutLogSchema = new mongoose.Schema({
    itemId: {
        type: String
    },
    qty: {
        type: int,
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
    }
});

module.exports = mongoose.model('buStockOutLog', buStockOutLogSchema);
