const mongoose = require('mongoose');

const buRepRequestDetailsSchema = new mongoose.Schema({
    buRepRequestId: {
        type: String
    },
    itemId: {
        type: String
    },
    qty: {
        type: int
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('buRepRequestDetails', buRepRequestDetailsSchema);