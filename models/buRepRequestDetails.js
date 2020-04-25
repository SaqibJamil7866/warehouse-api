const mongoose = require('mongoose');

const buRepRequestDetailsSchema = new mongoose.Schema({
    uuid: {
        type: String,
        required: [true, 'Please add a name']
    },
    buRepRequestId: {
        type: String
    },
    itemId: {
        type: String
    },
    qty: {
        type: Number
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('buRepRequestDetails', buRepRequestDetailsSchema);