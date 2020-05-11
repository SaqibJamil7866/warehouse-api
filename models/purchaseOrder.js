const mongoose = require('mongoose');

const PurchaseOrderSchema = new mongoose.Schema({
    uuid: {
        type: String
    },
    purchaseOrderNo: {
        type: String,
        required: [true, 'Please add order number']
    },
    date: {
        type: Date,
        default: Date.now,
        required: [true, 'Please add date']
    },
    generated: {
        type: String,
        required: [true, 'Please add generated data']
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
    itemCode: {
        type: String,
        required: [true, 'Please add item code']
    },
    description: {
        type: String,
        required: [true, 'Please add item code']
    },
    currentQty: {
        type: String,
        required: [true, 'Please add current qty']
    },
    reqQty: {
        type: String,
        required: [true, 'Please add req qty']
    },
    comments: {
        type: String,
        required: [true, 'Please add comments']
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

module.exports = mongoose.model('PurchaseOrder', PurchaseOrderSchema);
