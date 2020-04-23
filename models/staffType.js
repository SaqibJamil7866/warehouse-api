const mongoose = require('mongoose');

const staffTypeSchema = new mongoose.Schema({
    type: {
        type: String,
        required: [true, 'Please add type']
    },
    description: {
        type: String,
        required: [true, 'Please add description']
    },
    accessLevel: {
        type: String,
        required: [true, 'Please add access level']
    },
    status: {
        type: String,
        required: [true, 'Please add status']
    },
    createdBySystemAdminStaffId: {
        type: String
    },
    timeStamp: {
        type: Date,
        default: Date.now
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('staffType', staffTypeSchema);
