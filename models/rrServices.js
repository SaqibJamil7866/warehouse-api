const mongoose = require('mongoose');

const rrServicesSchema = new mongoose.Schema({
    rrId: {
        type: String
    },
    rServicesId: {
        type: String
    },
    results: {
        type: String
    },
    amount: {
        type: Number
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('rrServices', rrServicesSchema);
