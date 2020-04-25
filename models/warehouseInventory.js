const mongoose = require('mongoose');

const WarehouseInventorySchema = new mongoose.Schema({
    uuid: {
        type: String,
        required: [true, 'Please add a name']
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

module.exports = mongoose.model('WarehouseInventory', WarehouseInventorySchema);
