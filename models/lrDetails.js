const mongoose = require('mongoose');

const lrDetailsSchema = new mongoose.Schema({
    uuid: {
        type: String,
        required: [true, 'Please add a name']
    },
    results: {
        type: String
    },
    lrId: {
        type: String
    },
    lServicesId: {
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

module.exports = mongoose.model('lrDetails', lrDetailsSchema);
