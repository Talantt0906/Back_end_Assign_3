
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Song = require('./models/Song'); 

const app = express();

app.use(express.json()); 
app.use(cors());         
app.use(express.static('public')); 

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ Connected to MongoDB Atlas"))
    .catch(err => console.error("❌ Connection error:", err));

app.post('/songs', async (req, res) => {
    try {
        const newSong = new Song(req.body);
        const savedSong = await newSong.save();
        
        res.status(201).json(savedSong);
    } catch (err) {
        res.status(400).json({ message: "Validation failed: Missing fields or incorrect format", error: err.message });
    }
});

app.get('/songs', async (req, res) => {
    try {
        const songs = await Song.find().sort({ createdAt: -1 });
        res.json(songs);
    } catch (err) {
        res.status(500).json({ message: "Server Error", error: err.message });
    }
});

app.get('/songs/:id', async (req, res) => {
    try {
        const song = await Song.findById(req.params.id);
        
        if (!song) return res.status(404).json({ message: "Song not found" });
        
        res.json(song);
    } catch (err) {
        res.status(400).json({ message: "Invalid ID format" });
    }
});

app.put('/songs/:id', async (req, res) => {
    try {
        const updatedSong = await Song.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true, runValidators: true } 
        );

        if (!updatedSong) return res.status(404).json({ message: "Song not found" });
        
        res.json(updatedSong);
    } catch (err) {
        res.status(400).json({ message: "Update failed", error: err.message });
    }
});

app.delete('/songs/:id', async (req, res) => {
    try {
        const deletedSong = await Song.findByIdAndDelete(req.params.id);

        if (!deletedSong) return res.status(404).json({ message: "Song not found" });
        
        res.json({ message: "Song deleted successfully", id: req.params.id });
    } catch (err) {
        res.status(500).json({ message: "Delete failed", error: err.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});