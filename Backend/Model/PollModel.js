const mongoose = require('mongoose');


const pollSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    options: [{
        text: {
            type: String,
            required: true
        },
        votes: {
            type: Number,
            default: 0
        }
    }],
    endTime: {
        type: Date,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Poll', pollSchema);
