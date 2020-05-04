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
        type: String
    },
    status: {
        type: String
    },
    address: {
        type: String
    },
    fax: {
        type: String
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
        type: mongoose.Schema.ObjectId,
        ref: 'systemAdmin',
        required: [true, 'Please select System Admin']
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
