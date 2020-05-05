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
    functionalUnitId: {
        type: mongoose.Schema.ObjectId,
        ref: 'functionalUnit',
        required: [true, 'Please select Functional Unit']
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

module.exports = mongoose.model('businessUnit', businessUnitSchema);
