const mongoose = require('mongoose');

const WPODetailsSchema = new mongoose.Schema({
    warehousePOId: {
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

module.exports = mongoose.model('WPODetailsPRPO', WPODetailsSchema);
