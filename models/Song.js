const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: [true, 'Title is required'] 
    },
    artist: { 
        type: String, 
        required: [true, 'Artist is required'] 
    },
    genre: { 
        type: String, 
        required: [true, 'Genre is required'] 
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 3
    }
}, { 
    timestamps: true 
});

module.exports = mongoose.model('Song', songSchema);