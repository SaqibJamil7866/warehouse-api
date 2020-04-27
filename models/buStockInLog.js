const mongoose = require('mongoose');

const buStockInLogSchema = new mongoose.Schema({
    uuid: {
        type: String
    },
    buRepRequestId: {
        type: String
    },
    itemId: {
        type: String
    },
    qty: {
        type: Number,
        required: [true, 'Please add quantity']
    },
    buPrice: {
        type: Number,
        required: [true, 'Please add BU price']
    },
    salePrice: {
        type: Number,
        required: [true, 'Please add sale price'],
    },
    batchNo: {
        type: String,
        required: [true, 'Please add batch number'],
    },
    expiryDate: {
        type: Date
    },
    timeStamp: {
        type: Date,
        default: Date.now
    },
    staffId: {
        type: String
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

module.exports = mongoose.model('buStockInLog', buStockInLogSchema);
