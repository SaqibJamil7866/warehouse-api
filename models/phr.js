const mongoose = require('mongoose');

const phrSchema = new mongoose.Schema({
    uuid: {
        type: String,
        required: [true, 'Please add a name']
    },
    edrIprId: {
        type: String
    },
    requesterStaffId: {
        type: String
    },
    createdTimeStamp: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String
    },
    invoice: {
        type: String
    },
    resolvedByStaffId: {
        type: String
    },
    resolvedTimeStamp: {
        type: Date,
        default: Date.now
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('phr', phrSchema);
