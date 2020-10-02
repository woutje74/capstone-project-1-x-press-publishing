const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorHandler = require('errorhandler');
const apiRouter = require('./api/api');
const morgan = require('morgan');

const app = express();

const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/api', apiRouter);

app.use(errorHandler()); //always at the bottom




app.listen(PORT, () => {
    console.log(`Server is listing on port ${PORT}`);
});

module.exports = app;
