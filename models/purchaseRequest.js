const mongoose = require('mongoose');

const PurchaseRequestSchema = new mongoose.Schema({
    requestNo: {
        type: String
    },
    generatedBy: {
        type: String,
        required: [true, 'Please add generated By'],
    },
    date: {
        type: Date,
        default: Date.now,
        required: [true, 'Please add date']
    },
    vendorId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Vendor',
        required: [true, 'Please select Vendor']
    },
    status: {
        type: String,
        required: true
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

module.exports = mongoose.model('PurchaseRequest', PurchaseRequestSchema);
