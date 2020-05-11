const mongoose = require('mongoose');

const ShippingTermSchema = new mongoose.Schema({
    uuid: {
        type: String
    },
    descriptionme: {
        type: String,
        required: [true, 'Please add description']
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

module.exports = mongoose.model('shippingTerm', ShippingTermSchema);
