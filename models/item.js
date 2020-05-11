const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    uuid: {
        type: String
    },
    name: {
        type: String,
        required: [true, 'Please add name']
    },
    description: {
        type: String
    },
    subClass: {
        type: String
    },
    itemCode: {
        type: String,
        required: [true, 'Please add bar code'],
    },
    receiptUnit: {
        type: mongoose.Schema.ObjectId,
        ref: 'functionalUnit',
        required: [true, 'Please select Receipt Unit']
    },
    issueUnit: {
        type: mongoose.Schema.ObjectId,
        ref: 'functionalUnit',
        required: [true, 'Please select Issue Unit']
    },
    vendorId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Vendor'
    },
    purchasePrice: {
        type: String,
        required: [true, 'Please add purchase price'],
    },
    minimumLevel: {
        type: String
    },
    maximumLevel: {
        type: String
    },
    reorderLevel: {
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

module.exports = mongoose.model('Item', itemSchema);
