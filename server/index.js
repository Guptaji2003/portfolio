const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// Start server
app.listen(8000, () => {
  console.log(`Server is running on port ${PORT}`);
});
