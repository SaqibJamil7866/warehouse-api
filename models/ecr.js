const mongoose = require('mongoose');

const ecrSchema = new mongoose.Schema({
    uuid: {
        type: String,
        required: [true, 'Please add a name']
    },
    edrIprId: {
        type: String
    },
    createdTimeStamp: {
        type: Date,
        default: Date.now
    },
    staffId: {
        type: String
    },
    resolvedTimeStamp: {
        type: Date,
        default: Date.now
    },
    consultantId: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('ecr', ecrSchema);
