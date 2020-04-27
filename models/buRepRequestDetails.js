const mongoose = require('mongoose');

const buRepRequestDetailsSchema = new mongoose.Schema({
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
        required: [true, 'Please enter quantity'],
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

module.exports = mongoose.model('buRepRequestDetails', buRepRequestDetailsSchema);