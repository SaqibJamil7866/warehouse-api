const mongoose = require('mongoose');

const functionalUnitSchema = new mongoose.Schema({
    uuid: {
        type: String
    },
    fuName: {
        type: String,
        required: [true, 'Please add name']
    },
    description: {
        type: String,
        required: [true, 'Please add description']
    },
    fuHead: {
        type: String
    },
    status: {
        type: String
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

module.exports = mongoose.model('functionalUnit', functionalUnitSchema);
