const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        const allowedTypes = ['image/jpeg', 'image/png'];
        if (!allowedTypes.includes(file.mimetype)) {
            return cb(new Error('Only JPEG and PNG files are allowed'));
        }
        cb(null, true);
    },
    limits: { fileSize: 2 * 1024 * 1024 }, // 2MB limit
});

// const express = require('express');
const multer = require('multer');
const path = require('path');

// const router = express.Router();

// Configure Multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Directory where files will be saved
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
    },
});

app.post('/upload/photos', upload.array('photos', 10), (req, res) => {
    try {
        const filePaths = req.files.map((file) => file.path); // Save file paths to DB if needed
        res.status(200).json({ message: 'Photos uploaded successfully', files: filePaths });
    } catch (error) {
        console.error('Error uploading files:', error);
        res.status(500).json({ message: 'Failed to upload photos', error });
    }
});

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the Food Delivery API');
});

// Start server
app.listen(8000, () => {
  console.log(`Server is running on port ${PORT}`);
});
