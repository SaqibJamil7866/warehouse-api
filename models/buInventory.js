const mongoose = require('mongoose');

const buInventorySchema = new mongoose.Schema({
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
