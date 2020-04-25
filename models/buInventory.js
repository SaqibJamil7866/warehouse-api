const mongoose = require('mongoose');

const buInventorySchema = new mongoose.Schema({
    uuid: {
        type: String,
        required: [true, 'Please add a name']
    },
    buId: {
        type: String
    },
    itemId: {
        type: String
    },
    qty: {
        type: Number
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('buInventory', buInventorySchema);
