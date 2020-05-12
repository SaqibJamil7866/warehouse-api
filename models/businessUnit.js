const mongoose = require('mongoose');

const businessUnitSchema = new mongoose.Schema({
    uuid: {
        type: String
    },
    buName: {
        type: String,
        required: [true, 'Please add name']
    },
    description: {
        type: String,
        required: [true, 'Please add description']
    },
    buHead: {
        type: String
    },
    status: {
        type: String
    },
    buLogsId:{
        type: mongoose.Schema.ObjectId,
        ref: 'businessUnitLogs'
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
