const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config();
require('./app/config/database')();
require('./app/commun/initScript');
const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/', (req, res) => {
 res.send('Hello World!');
});

app.use('/api/auth', require('./app/routes/auth.api'));
app.use('/api/workspace', require('./app/routes/workspace.api'));
app.use('/api/reservation', require('./app/routes/reservation.api'));

// Start the server
app.listen(port, () => {
 console.log(`Server is running on port ${port}`);
});