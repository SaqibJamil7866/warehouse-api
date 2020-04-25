const mongoose = require('mongoose');

const surgeryServicesSchema = new mongoose.Schema({
    uuid: {
        type: String,
        required: [true, 'Please add a name']
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    status: {
        type: Number
    },
    price: {
        type: Number
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('surgeryServices', surgeryServicesSchema);
