const mongoose = require('mongoose');

const buReturnSchema = new mongoose.Schema({
    uuid: {
        type: String
    },
    buId: {
        type: String
    },
    itemId: {
        type: String
    },
    qty: {
        type: Number,
        required: [true, 'Please add quantity']
    },
    timeStamp: {
        type: Date,
        default: Date.now
    },
    returnReason: {
        type: String,
        required: [true, 'Please add return reason'],
    },
    batchNo: {
        type: String
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

module.exports = mongoose.model('buReturn', buReturnSchema);
