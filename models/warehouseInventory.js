const mongoose = require('mongoose');

const WarehouseInventorySchema = new mongoose.Schema({
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
