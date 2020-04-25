const mongoose = require('mongoose');

const VendorSchema = new mongoose.Schema({
    uuid: {
        type: String
    },
    name: {
        type: String,
        required: [true, 'Please add name']
    },
    phoneNumber: {
        type: String,
        required: [true, 'Please add phone number']
    },
    status: {
        type: String,
        required: [true, 'Please add status']
    },
    address: {
        type: String,
        required: [true, 'Please add address']
    },
    fax: {
        type: String,
        required: [true, 'Please add fax']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true,
        match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please add a valid email'
        ]
    },
    contactPerson: {
        type: String,
        required: [true, 'Please add contact person'],
    },
    createdBySystemAdminStaffId: {
        type: String
    },
    review: {
        type: String,
        required: [true, 'Please add review'],
    },
    timeStamp: {
        type: Date,
        default: Date.now
    },
    rating: {
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
