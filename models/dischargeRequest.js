const mongoose = require('mongoose');

const dischargeRequestSchema = new mongoose.Schema({
    edrIprId: {
        type: String
    },
    requesterStaffId: {
        type: String
    },
    requestedTimeStamp: {
        type: Date,
        default: Date.now
    },
    dischargedByStaffId: {
        type: String
    },
    dischargedTimeStamp: {
        type: Date,
        default: Date.now
    },
    summary: {
        type: String
    },
    prescription: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('dischargeRequest', dischargeRequestSchema);
