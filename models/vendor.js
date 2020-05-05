const mongoose = require('mongoose');

const VendorSchema = new mongoose.Schema({
    uuid: {
        type: String
    },
    name: {
        type: String,
        required: [true, 'Please add name']
    },
    contactPerson: {
        type: String,
        required: [true, 'Please add contact person'],
    },
    phoneNumber: {
        type: String
    },
    website: {
        type: String
    },
    address: {
        type: String
    },
    zipCode: {
        type: String
    },
    city: {
        type: String
    },
    country: {
        type: String
    },
    shippingTerms: {
        type: String
    },
    rating: {
        type: String,
    },
    status: {
        type: String,
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

module.exports = mongoose.model('Vendor', VendorSchema);
