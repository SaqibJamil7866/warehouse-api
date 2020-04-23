const mongoose = require('mongoose');

const rdNoteSchema = new mongoose.Schema({
    edrIprId: {
        type: String
    },
    consultationNotes: {
        type: String,
        required: [true, 'Please add Consultation Notes']
    },
    staffId: {
        type: String
    },
    timeStamp: {
        type: Date,
        default: Date.now
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('rdNote', rdNoteSchema);
