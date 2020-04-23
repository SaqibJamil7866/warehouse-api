const mongoose = require('mongoose');

const surgeryProcedureSchema = new mongoose.Schema({
    edrIprId: {
        type: String
    },
    suegeryServicesId: {
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
    resolvedTimeStamp: {
        type: Date,
        default: Date.now
    },
    resolvedByStaffId: {
        type: String
    },
    invoice: {
        type: Number
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('surgeryProcedure', surgeryProcedureSchema);
