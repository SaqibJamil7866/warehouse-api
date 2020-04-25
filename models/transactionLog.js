const mongoose = require('mongoose');

const transactionLogSchema = new mongoose.Schema({
    uuid: {
        type: String,
        required: [true, 'Please add a name']
    },
    edrIprId: {
        type: String
    },
    transactionType: {
        type: String,
    },
    staffId: {
        type: String
    },
    amount: {
        type: String
    },
    timeStamp: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('transactionLog', transactionLogSchema);
