const express = require('express');
const multer = require('multer');
const path = require('path');

const router = express.Router();

// Configure Multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Directory where files will be saved
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
    },
});

const upload = multer({ storage });

// Route to handle multiple file uploads
router.post('/upload/photos', upload.array('photos', 10), (req, res) => {
    try {
        const filePaths = req.files.map((file) => file.path); // Save file paths to DB if needed
        res.status(200).json({ message: 'Photos uploaded successfully', files: filePaths });
    } catch (error) {
        console.error('Error uploading files:', error);
        res.status(500).json({ message: 'Failed to upload photos', error });
    }
});

module.exports = router;
