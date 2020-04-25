const mongoose = require('mongoose');

const rServicesSchema = new mongoose.Schema({
    uuid: {
        type: String,
        required: [true, 'Please add a name']
    },
    name: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    },
    status: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('rServices', rServicesSchema);
