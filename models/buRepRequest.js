const mongoose = require('mongoose');

const buRepRequestSchema = new mongoose.Schema({
    buId: {
        type: String
    },
    requesterStaffId: {
        type: String
    },
    timeStamp: {
        type: Date,
        default: Date.now
    },
    Status: {
        type: String,
        required: [true, 'Please add status'],
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('buRepRequest', buRepRequestSchema);
