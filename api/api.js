const express = require('express');
const app = require('../server');
const artistsRouter = require('./artists.js');
const seriesRouter = require('./series.js');

const apiRouter = express.Router();

apiRouter.use('/artists', artistsRouter);
apiRouter.use('/series', seriesRouter);

module.exports = apiRouter;
