const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
require('dotenv').config();

const port = 3000;
require('./db/db');
app.use(express.json());

app.use(cors());
app.use(morgan('dev'));

app.use('/api', require('./routes/index'));
app.use((err, req, res, next) => {
    // Log the error
    
    console.error(err);
  
    // Set a status code and send an error response
    res.status(500).json({
      error: 'Internal Server Error',
      message: err.message, // You can include the error message if available
    });
  });
  
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });