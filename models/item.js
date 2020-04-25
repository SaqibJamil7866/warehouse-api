const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    uuid: {
        type: String,
        required: [true, 'Please add a name']
    },
    name: {
        type: String,
        required: [true, 'Please add name']
    },
    description: {
        type: String,
        required: [true, 'Please add description']
    },
    subClass: {
        type: String,
        required: [true, 'Please add sub class']
    },
    unit: {
        type: String,
        required: [true, 'Please add unit']
    },
    vendorId: {
        type: String
    },
    purchasePrice: {
        type: String,
        required: [true, 'Please add purchase price'],
    },
    buPrice: {
        type: String,
        required: [true, 'Please add BU price'],
    },
    salePrice: {
        type: String,
        required: [true, 'Please add sale price'],
    },
    barCode: {
        type: String,
        required: [true, 'Please add bar code'],
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Item', itemSchema);
