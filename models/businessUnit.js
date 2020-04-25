const mongoose = require('mongoose');

const businessUnitSchema = new mongoose.Schema({
    uuid: {
        type: String
    },
    buName: {
        type: String
    },
    description: {
        type: String,
        required: [true, 'Please add description']
    },
    buHead: {
        type: String
    },
    createBySystemAdminStaffId: {
        type: String
    },
    timeStamp: {
        type: Date,
        default: Date.now
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

module.exports = mongoose.model('businessUnit', businessUnitSchema);
